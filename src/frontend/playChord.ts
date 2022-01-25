import { ChordSizes } from '../ChordSizes';
import { ChordTypes } from '../ChordTypes';
// import { getChordNotes } from '../getChordNotes';
import { Note } from '../Note';
import { NoteNames } from '../NoteNames';
import { BaseNotes } from '../scales';

export type ChordPlayerOptions = {
  audioCtx: AudioContext;
  gainNode: GainNode;
  oscNode: OscillatorNode;
  baseOctave: number;
  chordInversion: number;
  chordRoot: NoteNames;
  chordSize: ChordSizes;
  chordType: ChordTypes;
};

export const playChord = (args: ChordPlayerOptions) => {
  const { audioCtx } = args;

  const twelveTones = Object.values(BaseNotes).map(({ name }) => name);

  const chordNotes = [] as any;//getChordNotes(args);
  const nodes = getChordAudioNodes(audioCtx, chordNotes.length);

  let curOctave = 4;
  let lastIdx = -1;
  const notes: Note[] = [];
  for (const [ idx, noteName ] of chordNotes.entries()) {
    const curIdx = twelveTones.indexOf(noteName);
    if (lastIdx !== -1 && curIdx < lastIdx) {
      curOctave += 1;
    }

    notes.push(new Note(noteName, curOctave));
    lastIdx = curIdx;
  }

  playNotes(audioCtx, notes, nodes);
};

export const playNotes = (
  audioCtx: AudioContext,
  chordNotes: Note[],
  chordAudioNodes: Array<[ GainNode, OscillatorNode ]>,
) => {

};

export const getChordAudioNodes = (audioCtx: AudioContext, num: number): Array<[ GainNode, OscillatorNode ]> => {
  const retArr: Array<[ GainNode, OscillatorNode ]> = [];
  for (let ii = 0; ii < num; ii += 1) {
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.5;
    gainNode.connect(audioCtx.destination);

    const oscNode = audioCtx.createOscillator();
    oscNode.connect(gainNode);

    retArr.push([
      gainNode,
      oscNode,
    ]);
  }

  return retArr;
};

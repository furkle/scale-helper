import { ChordSizes } from '../ChordSizes';
import { ChordTypes } from '../ChordTypes';
import { NoteNames } from '../NoteNames';

export type ChordPlayerOptions = {
  audioCtx: AudioContext,
  gainNode: GainNode,
  oscNode: OscillatorNode,
  chordRoot: NoteNames,
  chordSize: ChordSizes,
  chordType: ChordTypes,
};

export const playChord = (args: ChordPlayerOptions) => {
  const { chordSize } = args;

  if (chordSize === ChordSizes.Power) {
    playTwoNoteChord(args);
  } else if (chordSize === ChordSizes.Second ||
      chordSize === ChordSizes.Fourth ||
      chordSize === ChordSizes.Triad)
  {
    playThreeNoteChord(args);
  } else if (chordSize === ChordSizes.Sixth ||
      chordSize === ChordSizes.Seventh)
  {
    playFourNoteChord(args);
  } else if (chordSize === ChordSizes.Ninth) {
    playFiveNoteChord(args);
  } else if (chordSize === ChordSizes.Eleventh) {
    playSixNoteChord(args);
  } else if (chordSize === ChordSizes.Thirteenth) {
    playSevenNoteChord(args);
  }
};

export const playTwoNoteChord = ({
  audioCtx,
  gainNode,
  oscNode,
  chordRoot,
  chordSize,
  chordType,
}: ChordPlayerOptions) => {
  const chordNodes = [
    [ gainNode, oscNode ],
    ...getChordNodes(audioCtx, 1),
  ];
};

export const playThreeNoteChord = ({
  audioCtx,
  gainNode,
  oscNode,
  chordRoot,
  chordSize,
  chordType,
}: ChordPlayerOptions) => {
  const chordNodes: Array<[ GainNode, OscillatorNode ]> = [
    [ gainNode, oscNode ],
    ...getChordNodes(audioCtx, 2),
  ];

  if (chordSize === ChordSizes.Second) {
    playSuspendedSecond(audioCtx, chordNodes, chordRoot);
  } else if (chordSize === ChordSizes.Fourth) {
    playSuspendedFourth(audioCtx, chordNodes, chordRoot);
  } else if (chordSize === ChordSizes.Triad) {
    if (chordType === ChordTypes.Minor) {
      playMinorTriad(audioCtx, chordNodes, chordRoot);
    } else {
      playMajorTriad(audioCtx, chordNodes, chordRoot);
    }
  }
};

export const playSuspendedSecond = (
  audioCtx: AudioContext,
  chordNodes: Array<[ GainNode, OscillatorNode ]>,
  chordRoot: NoteNames,
) => {

};

export const playSuspendedFourth = (
  audioCtx: AudioContext,
  chordNodes: Array<[ GainNode, OscillatorNode ]>,
  chordRoot: NoteNames,
) => {

};

export const playMajorTriad = (
  audioCtx: AudioContext,
  chordNodes: Array<[ GainNode, OscillatorNode ]>,
  chordRoot: NoteNames,
) => {

};

export const playMinorTriad = (
  audioCtx: AudioContext,
  chordNodes: Array<[ GainNode, OscillatorNode ]>,
  chordRoot: NoteNames,
) => {

};

export const playFourNoteChord = ({
  audioCtx,
  gainNode,
  oscNode,
  chordRoot,
  chordSize,
  chordType,
}: ChordPlayerOptions) => {
  const chordNodes = [
    [ gainNode, oscNode ],
    ...getChordNodes(audioCtx, 3),
  ];
};

export const playFiveNoteChord = ({
  audioCtx,
  gainNode,
  oscNode,
  chordRoot,
  chordSize,
  chordType,
}: ChordPlayerOptions) => {
  const chordNodes = [
    [ gainNode, oscNode ],
    ...getChordNodes(audioCtx, 4),
  ];
};

export const playSixNoteChord = ({
  audioCtx,
  gainNode,
  oscNode,
  chordRoot,
  chordSize,
  chordType,
}: ChordPlayerOptions) => {
  const chordNodes = [
    [ gainNode, oscNode ],
    ...getChordNodes(audioCtx, 5),
  ];
};

export const playSevenNoteChord = ({
  audioCtx,
  gainNode,
  oscNode,
  chordRoot,
  chordSize,
  chordType,
}: ChordPlayerOptions) => {
  const chordNodes = [
    [ gainNode, oscNode ],
    ...getChordNodes(audioCtx, 6),
  ];
};

export const getChordNodes = (audioCtx: AudioContext, num: number): Array<[ GainNode, OscillatorNode ]> => {
  const retArr: Array<[ GainNode, OscillatorNode ]> = [];
  for (let ii = 0; ii < num; ii += 1) {
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.5;
    gainNode.connect(audioCtx.destination);

    const oscNode = audioCtx.createOscillator();
    oscNode.connect(gainNode);
    oscNode.start();

    retArr.push([
      gainNode,
      oscNode,
    ]);
  }

  return retArr;
};

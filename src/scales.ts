import { Note } from './Note';
import { NoteFrequencies } from './NoteFrequencies';
import { NoteNames } from './NoteNames';
import { Scale } from './Scale';
import { ScalePatterns } from './ScalePatterns';
import { scaleRecord } from './scaleRecord';

export const GetScale = (root: NoteNames, pattern: ScalePatterns, rootOctave = 4): Scale => {
  return {
    root,
    notes: getScaleNotes(root, pattern, rootOctave),
  };
};

export const getScaleNotes = (root: NoteNames, pattern: ScalePatterns, octave = 4): Scale['notes'] => {
  let incrementedOctave = false;
  let curOctave = octave;
  return scaleRecord[pattern][root].map((noteBase, idx) => {
    if (idx &&
      !incrementedOctave &&
      (noteBase === NoteNames.CFlat || noteBase === NoteNames.C || noteBase === NoteNames.CSharp))
    {
      curOctave += 1;
      incrementedOctave = true;
    }

    return {
      name: noteBase,
      octave: curOctave,
      get frequency() {
        return getFrequency(this.name, this.octave);
      },
    };
  });
};

export const BaseNotes: Record<NoteNames, Note> = (Object.values(NoteNames) as NoteNames[]).reduce((notes, name) => {
  notes[name] = {
    name,
    get frequency() {
      return getFrequency(this.name, this.octave);
    }
  };

  return notes;
}, {} as Record<NoteNames, Note>);

export const getFrequency = (name: NoteNames, octave?: number): number => {
  let curOctave = 4;
  if (octave === 0) {
    curOctave = 0;
  } else if (octave) {
    curOctave = octave;
  }

  return NoteFrequencies[`${name}${curOctave}`] || -1;
};


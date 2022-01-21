import { Note } from './Note';
import { NoteFrequencies } from './NoteFrequencies';
import { NoteNames } from './NoteNames';
import { Scale } from './Scale';
import { ScalePatterns } from './ScalePatterns';
import { scaleRecord } from './scaleRecord';

export const GetScale = (root: NoteNames, pattern: ScalePatterns, octave = 4): Scale => {
  return {
    root,
    notes: getScaleNotes(root, pattern, octave),
  };
};

export const getScaleNotes = (root: NoteNames, pattern: ScalePatterns, octave = 4): Scale['notes'] => {
  return scaleRecord[pattern][root].map((noteBase) => ({
    name: noteBase,
    get frequency() {
      return getFrequency(this.name, this.octave);
    },
  
    octave,
  }));
};

export const BaseNotes: Record<NoteNames, Note> = Object.values(NoteNames).reduce((notes, name) => {
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


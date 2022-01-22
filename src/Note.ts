import { getFrequency } from './scales';
import { NoteNames } from './NoteNames';

export interface INote {
  name: NoteNames;
  frequency: number;
  octave?: number;
}

export class Note implements INote {
  name: NoteNames;
  octave: number;

  constructor(name: NoteNames, octave = 4) {
    this.name = name;
    this.octave = octave;
  }

  get frequency() {
    return getFrequency(this.name, this.octave);
  }
}

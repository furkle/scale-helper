import { NoteNames } from './NoteNames';

export interface Note {
  name: NoteNames;
  frequency: number;
  octave?: number;
}

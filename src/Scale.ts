import { Note } from './Note';
import { NoteNames } from './NoteNames';

export interface Scale {
  root: NoteNames;
  notes: Note[];
}

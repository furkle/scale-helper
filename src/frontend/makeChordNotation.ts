import { ChordSizes } from '../ChordSizes';
import { ChordTypes } from '../ChordTypes';
import { NoteNames } from '../NoteNames';
import { transformChordSize } from './transformChordSize';
import { transformChordType } from './transformChordType';
import { transformNoteName } from './transformNoteName';

export const makeChordNotation = (
  chordRoot: NoteNames,
  chordType: ChordTypes,
  chordSize: ChordSizes,
): string => {
  return `${transformNoteName(chordRoot)}${transformChordType(chordType)}${transformChordSize(chordSize)}`;
};

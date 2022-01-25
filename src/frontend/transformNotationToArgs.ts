import { ChordSizes } from '../ChordSizes';
import { ChordTypes } from '../ChordTypes';
import { NoteNames } from '../NoteNames';

type ReturnItem = {
  chordInversion: number;
  chordRoot: NoteNames;
  chordSize: ChordSizes,
  chordType: ChordTypes,
};

export const transformNotationToArgs = (notation: string): ReturnItem[] => {
  const retArr: ReturnItem[] = [];

  const splitted = notation.split(/\s+/);
  for (const item of splitted) {
    
  }

  return retArr;
};

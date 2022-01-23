import React from 'react';

import { ChordSizes } from '../../ChordSizes';
import { ChordTypes } from '../../ChordTypes';
import { makeChordNotation } from '../makeChordNotation';
import { NoteNames } from '../../NoteNames';
import { transformNoteName } from '../transformNoteName';

export const ChordText = ({
  chordRoot,
  chordSize,
  chordType,
}: { chordRoot: NoteNames, chordSize: ChordSizes, chordType: ChordTypes }) => {
  return (
    <div>
      <p>
        <span>{transformNoteName(chordRoot)} </span>
        <span>{chordType} </span>
        <span>{chordSize} </span>
        <span>(<em>{makeChordNotation(chordRoot, chordType, chordSize)}</em>)</span>
      </p>
    </div>
  ); 
};

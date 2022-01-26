import React from 'react';
import { BaseNotes } from '../../scales';
import { includeDuplicateNames } from '../includeDuplicateNames';
import { noteFilter } from '../pages/Notes';
import { transformNoteName } from '../transformNoteName';

export const ChordRootSelect = ({
  setChordRoot,
}: {  setChordRoot: React.ChangeEventHandler<HTMLSelectElement> }) => {
  return (
    <div>
      <h3>Chord root</h3>
      <select onChange={setChordRoot} >
        {Object.values(BaseNotes).filter(noteFilter).map((note) => (
          <option
            key={note.name}
            value={note.name}
          >
            {transformNoteName(includeDuplicateNames(note.name))}
          </option>
        ))}
      </select>
    </div>
  );
};

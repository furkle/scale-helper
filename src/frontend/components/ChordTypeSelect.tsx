import React from 'react';

import { ChordTypes } from '../../ChordTypes';

export const ChordTypeSelect = ({
  setChordType,
}: { setChordType: React.ChangeEventHandler<HTMLSelectElement> }) => {
  return (
    <div>
      <h3>Chord type</h3>
      <select onChange={setChordType}>
        {Object.values(ChordTypes).map((chordType) => (
          <option
            key={chordType}
            value={chordType}
          >
            {chordType}
          </option>
        ))}
      </select>
    </div>
  )
};

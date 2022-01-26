import React from 'react';

import { ChordSizes } from '../../ChordSizes';

export const ChordSizeSelect = ({
  chordSize,
  setChordSize,
  sizeOptionList,
}: {
  chordSize: ChordSizes;
  setChordSize: React.ChangeEventHandler<HTMLSelectElement>;
  sizeOptionList: ChordSizes[];
}) => {
  return (
    <div>
      <h3>Chord size</h3>
      <select
        onChange={setChordSize}
        disabled={sizeOptionList.length === 1}
        value={chordSize}
      >
        {sizeOptionList.map((chordSizeItem) => (
          <option
            key={chordSize}
            value={chordSize}
          >
            {chordSize}
          </option>
        ))}
      </select>
    </div>
  )
}
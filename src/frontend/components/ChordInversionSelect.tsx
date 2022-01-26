import React from 'react';

export const ChordInversionSelect = ({
  setChordInversion,
}: { setChordInversion: React.ChangeEventHandler<HTMLSelectElement> }) => {
  return (
    <div>
      <h3>Chord inversion</h3>
      <select onChange={setChordInversion}>
        <option value={0}>None</option>
        <option value={1}>1st inversion</option>
        <option value={2}>2nd inversion</option>
        <option value={3}>3rd inversion</option>
      </select>
    </div>
  );
};

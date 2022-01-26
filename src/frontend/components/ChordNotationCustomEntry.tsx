import React from 'react';

export const ChordNotationCustomEntry = ({
  inputValue,
  isChecked,
  playCustomChords,
  toggleCustomEntry,
}: {
  inputValue: string;
  isChecked: boolean;
  playCustomChords: () => void;
  toggleCustomEntry: () => void;
}) => {
  return (
    <div>
      <div>
        <h3>Custom/multi chord entry</h3>
        <input
          checked={isChecked}
          onChange={toggleCustomEntry}
          type="checkbox"
        />
      </div>
  
      {isChecked ?
        <div>
          <input
            value={inputValue}
            placeholder="Enter chord notation"
          />
  
          <button onClick={playCustomChords}>Play custom chords</button>
        </div> :
        null}
    </div>
  );
};

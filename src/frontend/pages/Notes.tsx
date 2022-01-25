import React from 'react';

import { BaseNotes } from '../../scales';
import { Note } from '../components/Note';
import { Note as NoteType } from '../../Note';

export const noteFilter = (val: NoteType) => (
  val !== BaseNotes.CFlat &&
    val !== BaseNotes.DFlat &&
    val !== BaseNotes.EFlat &&
    val !== BaseNotes.GFlat &&
    val !== BaseNotes.AFlat &&
    val !== BaseNotes.BFlat
);

export const Notes = ({
  audioCtx,
  gainNode,
  oscNode,
}: { audioCtx: AudioContext, gainNode: GainNode, oscNode: OscillatorNode }) => {
  const [ octave, setOctave ] = React.useState(4);

  const notes = Object.values(BaseNotes).filter(noteFilter);
  notes.forEach((note) => {
    note.octave = octave;
  });

  const setOctaveFunc: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setOctave(Number(e.target.value));
  };

  return (
    <div>
      <h2>Notes</h2>
      <div>
        <h3>Current octave</h3>
        <input
          type="number"
          value={octave}
          min={0}
          max={8}
          onChange={setOctaveFunc}
        />
      </div>

      <ul>
        {notes.map((note) => (
          <li key={note.name}>
            <Note
              audioCtx={audioCtx}
              data={note}
              gainNode={gainNode}
              oscNode={oscNode}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

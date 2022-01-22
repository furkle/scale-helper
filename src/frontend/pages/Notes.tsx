import React from 'react';

import { BaseNotes } from '../../scales';
import { Note } from '../components/Note';
import { Note as NoteType } from '../../Note';

const noteFilter = (val: NoteType) => (
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
    return (
      <div>
        <h2>Notes</h2>
        <ul>
          {Object.values(BaseNotes).filter(noteFilter).map((note) => (
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

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
  oscNode,
}: { audioCtx: AudioContext, oscNode: OscillatorNode }) => {
    return (
      <div>
        <ul>
          {Object.values(BaseNotes).filter(noteFilter).map((note) => (
            <li>
              <Note
                audioCtx={audioCtx}
                data={note}
                oscNode={oscNode}
              />
            </li>
          ))}
        </ul>
      </div>
    );
};

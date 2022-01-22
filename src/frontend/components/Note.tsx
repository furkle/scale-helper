import React from 'react';

import { Note as NoteType } from '../../Note';
import { includeDuplicateNames } from '../includeDuplicateNames';
import { transformNoteName } from '../transformNoteName';

export const Note = ({
  audioCtx,
  data,
  oscNode,
}: { audioCtx: AudioContext, data: NoteType, oscNode: OscillatorNode }) => {
  const playNote = () => {
    oscNode.frequency.setValueAtTime(data.frequency, audioCtx.currentTime);
  };

  return (
    <div onClick={playNote}>
      <h4>{transformNoteName(includeDuplicateNames(data.name))}</h4>
      <p>{data.frequency}</p>
    </div>
  );
};

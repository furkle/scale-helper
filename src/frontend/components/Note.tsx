import React from 'react';

import { includeDuplicateNames } from '../includeDuplicateNames';
import { Note as NoteType } from '../../Note';
import { transformNoteName } from '../transformNoteName';

export const Note = ({
  audioCtx,
  data,
  gainNode,
  oscNode,
}: { audioCtx: AudioContext, data: NoteType, gainNode: GainNode, oscNode: OscillatorNode }) => {
  const playNote = () => {
    if (!oscNode) {
      return;
    }

    oscNode.frequency.cancelScheduledValues(audioCtx.currentTime);
    gainNode.gain.cancelScheduledValues(audioCtx.currentTime);

    oscNode.frequency.setValueAtTime(data.frequency, audioCtx.currentTime);
    gainNode.gain.setTargetAtTime(0.5, audioCtx.currentTime, 0.5);
    gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + 2, 0.5);
  };

  return (
    <div onClick={playNote}>
      <h4>{transformNoteName(includeDuplicateNames(data.name))}</h4>
      <p>{data.frequency}</p>
    </div>
  );
};

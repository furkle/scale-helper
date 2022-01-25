import React from 'react';

import { AttackSustainReleaseEnvelope } from '../AttackReleaseEnvelope';
import { defaultAttackSustainReleaseEnvelope } from '../defaultAttackSustainReleaseEnvelope';
import { includeDuplicateNames } from '../includeDuplicateNames';
import { Note as NoteType } from '../../Note';
import { transformNoteName } from '../transformNoteName';
import { playNote } from '../playNote';

export const Note = ({
  asrEnvelope: attackReleaseEnvelope,
  audioCtx,
  data,
  gainNode,
  oscNode,
}: {
  asrEnvelope?: AttackSustainReleaseEnvelope;
  audioCtx: AudioContext;
  data: NoteType;
  gainNode: GainNode;
  oscNode: OscillatorNode;
}) => {
  debugger;
  const playNoteFunc = playNote.bind(null, {
    audioCtx,
    data,
    gainNode,
    oscNode,
    attackReleaseEnvelope: attackReleaseEnvelope || defaultAttackSustainReleaseEnvelope,
  });

  return (
    <div onClick={playNoteFunc}>
      <h4>{transformNoteName(includeDuplicateNames(data.name))}</h4>
      <p>{data.frequency}</p>
    </div>
  );
};

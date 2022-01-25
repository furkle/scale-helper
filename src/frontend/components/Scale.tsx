import React from 'react';
import { Note } from '../../Note';

import { NoteNames } from '../../NoteNames';
import { ScalePatterns } from '../../ScalePatterns';
import { getScale } from '../../scales';
import { AttackSustainReleaseEnvelope } from '../AttackReleaseEnvelope';
import { defaultAttackSustainReleaseEnvelope } from '../defaultAttackSustainReleaseEnvelope';
import { playNote } from '../playNote';
import { transformNoteName } from '../transformNoteName';

export const Scale = (args: {
  audioCtx: AudioContext;
  arEnvelope?: AttackSustainReleaseEnvelope;
  gainNode: GainNode;
  oscNode: OscillatorNode;
  pattern: ScalePatterns;
  rootNote: NoteNames;
  scale: NoteNames[];
  typeLabel: string;
}) => {
  const {
    arEnvelope,
    pattern,
    rootNote,
    scale,
    typeLabel,
  } = args;

  const envelope = arEnvelope || defaultAttackSustainReleaseEnvelope;
  const attackReleaseEnvelope = {
    ...envelope,
    sustainTime: envelope.sustainTime * 0.5,
  };

  const {
    attackTime,
    sustainTime,
    releaseTime,
  } = attackReleaseEnvelope;

  const playScale = () => {
    const fullScale = getScale(rootNote, pattern);
    fullScale.notes.push(
      new Note(fullScale.notes[0].name, (fullScale.notes[0].octave || 4) + 1),
    );

    const noteLength = (attackTime + sustainTime + releaseTime);
    for (let ii = 0; ii < fullScale.notes.length; ii += 1) {
      playNote({
        ...args,
        attackReleaseEnvelope,
        data: fullScale.notes[ii],
        timeToWait: noteLength * ii,
      });
    }
  };

  return (
    <div onClick={playScale}>
      <p>
        <h3>{`${transformNoteName(rootNote)} ${typeLabel}`}</h3>
      </p>

      <ul>
        {scale.map((val) => (
          <li key={`${rootNote}-${val}-${typeLabel}`}>
            <span>{transformNoteName(val)}</span>
          </li>
        ))}
      </ul>
    </div> 
  );
}

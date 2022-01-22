import React from 'react';
import { Note } from '../../Note';

import { NoteNames } from '../../NoteNames';
import { ScalePatterns } from '../../ScalePatterns';
import { getScale } from '../../scales';
import { transformNoteName } from '../transformNoteName';

export const Scale = ({
  audioCtx,
  gainNode,
  oscNode,
  pattern,
  rootNote,
  scale,
  typeLabel,
}: {
  audioCtx: AudioContext,
  gainNode: GainNode,
  oscNode: OscillatorNode,
  pattern: ScalePatterns,
  rootNote: NoteNames,
  scale: NoteNames[],
  typeLabel: string,
}) => {
  const playScale = () => {
    if (!oscNode) {
      return;
    }

    oscNode.frequency.cancelScheduledValues(audioCtx.currentTime);
    gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
    
    const fullScale = getScale(rootNote, pattern);
    fullScale.notes.push(
      new Note(fullScale.notes[0].name, (fullScale.notes[0].octave || 4) + 1),
    );

    const noteLength = 2;
    for (let ii = 0; ii < fullScale.notes.length; ii += 1) {
      oscNode.frequency.setValueAtTime(fullScale.notes[ii].frequency, audioCtx.currentTime + ii * noteLength);
      gainNode.gain.setTargetAtTime(0.5, audioCtx.currentTime + ii * noteLength, 0.5);
      gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + ii * noteLength + (noteLength - 1.25), 0.5);
    }
  };

  return (
    <div onClick={playScale}>
      <p>
        <span>{`${transformNoteName(rootNote)} ${typeLabel}`}</span>
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

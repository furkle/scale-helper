import React from 'react';

import { NoteNames } from '../../NoteNames';
import { Scale } from '../components/Scale';
import { ScaleAnchorList } from '../components/ScaleAnchorList';
import { ScalePatterns } from '../../ScalePatterns';
import { scaleRecord } from '../../scaleRecord';

export const Scales = ({
  audioCtx,
  gainNode,
  oscNode,
}: {
  audioCtx: AudioContext,
  gainNode: GainNode,
  oscNode: OscillatorNode,
}) => {
  return (
    <div>
      <ScaleAnchorList />
      <h2>Scales</h2>
      <div>
        <a id="natural-major"></a>
        <h3>Natural major scales</h3>
        {Object.entries(scaleRecord[ScalePatterns.NaturalMajor]).map(([ rootNote, scale ]) => (
          scale.length ?
            <Scale
              key={`${rootNote}-${scale}`}
              audioCtx={audioCtx}
              gainNode={gainNode}
              oscNode={oscNode}
              pattern={ScalePatterns.NaturalMajor}
              rootNote={rootNote as NoteNames}
              scale={scale}
              typeLabel="major"
            /> :
            null
        ))}
      </div>

      <div>
        <a id="natural-minor"></a>
        <h3>Natural minor scales</h3>
        {Object.entries(scaleRecord[ScalePatterns.NaturalMinor]).map(([ rootNote, scale ]) => (
          scale.length ? 
            <Scale
              key={`${rootNote}-${scale}`}
              audioCtx={audioCtx}
              gainNode={gainNode}
              oscNode={oscNode}
              pattern={ScalePatterns.NaturalMinor}
              rootNote={rootNote as NoteNames}
              scale={scale}
              typeLabel="minor"
            /> :
            null
        ))}
      </div>
    
      <div>
        <a id="harmonic-major"></a>
        <h3>Harmonic major scales</h3>
        {Object.entries(scaleRecord[ScalePatterns.HarmonicMajor]).map(([ rootNote, scale ]) => (
          scale.length ?
            <Scale
              key={`${rootNote}-${scale}`}
              audioCtx={audioCtx}
              gainNode={gainNode}
              oscNode={oscNode}
              pattern={ScalePatterns.HarmonicMajor}
              rootNote={rootNote as NoteNames}
              scale={scale}
              typeLabel="harmonic major"
            /> :
            null
        ))}
      </div>

      <div>
        <a id="harmonic-minor"></a>
        <h3>Harmonic minor scales</h3>
        {Object.entries(scaleRecord[ScalePatterns.HarmonicMinor]).map(([ rootNote, scale ]) => (
          scale.length ? 
            <Scale
              key={`${rootNote}-${scale}`}
              audioCtx={audioCtx}
              gainNode={gainNode}
              oscNode={oscNode}
              pattern={ScalePatterns.HarmonicMinor}
              rootNote={rootNote as NoteNames}
              scale={scale}
              typeLabel="harmonic minor"
            /> :
            null
        ))}
      </div>
    </div>
  );
};

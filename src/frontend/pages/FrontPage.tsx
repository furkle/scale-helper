import React from 'react';
import { NoteNames } from '../../NoteNames';

// import { NoteNames } from '../NoteNames';
import { scaleRecord } from '../../scaleRecord';
import { Scale } from '../components/Scale';
import { ScaleAnchorList } from '../components/ScaleAnchorList';
// import { GetScale } from '../scales';
// import { transformNoteName } from './transformNoteName';
import { initializeWebAudio } from '../initializeWebAudio';
import { Notes } from './Notes';

type AppState = {
  audioCtx: AudioContext;
  gainNode: GainNode;
  oscNode: OscillatorNode;
}

export default function App() {
  const [ appState, setAppState ] = React.useState<AppState>({} as AppState);
  const cb = () => {
    // Don't allow initialization more than once.
    if (!appState.audioCtx) {
      const nodes = initializeWebAudio();
      setAppState(nodes);
    }
  };

  return (
    <div className="App" onClick={cb}>
      <h1>Scale Helper</h1>
      <div>
        <h2>Notes</h2>
        <div>
          <Notes
            audioCtx={appState.audioCtx}
            oscNode={appState.oscNode}
          />
        </div>

        <h2>Scales</h2>
        <ScaleAnchorList />
        <div>
          <a id="natural-major"></a>
          <h3>Natural major scales</h3>
          {Object.entries(scaleRecord.NaturalMajor).map(([ rootNote, scale ]) => (
            scale.length ?
              <Scale
                rootNote={rootNote as NoteNames}
                scale={scale}
                typeLabel="major"
              /> :
              null
          ))}
        </div>
     
        <div>
          <a id="harmonic-major"></a>
          <h3>Harmonic major scales</h3>
          {Object.entries(scaleRecord.HarmonicMajor).map(([ rootNote, scale ]) => (
            scale.length ?
              <Scale
                rootNote={rootNote as NoteNames}
                scale={scale}
                typeLabel="harmonic major"
              /> :
              null
          ))}
        </div>

        <div>
          <a id="natural-minor"></a>
          <h3>Natural minor scales</h3>
          {Object.entries(scaleRecord.NaturalMinor).map(([ rootNote, scale ]) => (
            scale.length ? 
              <Scale
                rootNote={rootNote as NoteNames}
                scale={scale}
                typeLabel="minor"
              /> :
              null
          ))}
        </div>

        <div>
          <a id="harmonic-minor"></a>
          <h3>Harmonic minor scales</h3>
          {Object.entries(scaleRecord.HarmonicMinor).map(([ rootNote, scale ]) => (
            scale.length ? 
              <Scale
                rootNote={rootNote as NoteNames}
                scale={scale}
                typeLabel="harmonic minor"
              /> :
              null
          ))}
        </div>
      </div>
    </div>
  );
}

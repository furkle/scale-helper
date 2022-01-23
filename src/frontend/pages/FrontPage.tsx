import React, { ReactNode } from 'react';

import { ActivePageSelector } from '../components/ActivePageSelector';
import { Chords } from './Chords';
import { initializeWebAudio } from '../initializeWebAudio';
import { Notes } from './Notes';
import { Scales } from './Scales';

export type AppState = {
  activePage: 'chords' | 'none' | 'notes' | 'scales';
  audioCtx: AudioContext;
  gainNode: GainNode;
  oscNode: OscillatorNode;
}

export default function FrontPage() {
  const [ appState, setAppState ] = React.useState<AppState>({
    activePage: 'none',
  } as AppState);

  const setActive = (activePage: AppState['activePage']) => {
    // Don't allow initialization more than once.
    let nodes = {
      audioCtx: appState.audioCtx,
      gainNode: appState.gainNode,
      oscNode: appState.oscNode,
    };

    if (!appState.audioCtx) {
      nodes = initializeWebAudio();
    }

    setAppState({
      ...appState,
      ...nodes,
      activePage,
    });
  };

  let activePageComp: ReactNode = null;
  if (appState.activePage === 'chords') {
    activePageComp = <Chords
      audioCtx={appState.audioCtx}
      gainNode={appState.gainNode}
      oscNode={appState.oscNode}
    />;
  } else if (appState.activePage === 'notes') {
    activePageComp = <Notes
      audioCtx={appState.audioCtx}
      gainNode={appState.gainNode}
      oscNode={appState.oscNode}
    />;
  } else if (appState.activePage === 'scales') {
    activePageComp = <Scales
      audioCtx={appState.audioCtx}
      gainNode={appState.gainNode}
      oscNode={appState.oscNode}
    />;
  }

  return (
    <div className="App">
      <h1>Scale Helper</h1>
      <ActivePageSelector setActive={setActive} />
      <div>
        {activePageComp}
      </div>
    </div>
  );
}

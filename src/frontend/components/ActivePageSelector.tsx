import React from 'react';

import { AppState } from '../pages/FrontPage';

export const ActivePageSelector = ({ setActive }: { setActive: (activePage: AppState['activePage']) => void }) => {
  const setToNotes = () => {
    setActive('notes');
  };

  const setToScales = () => setActive('scales');

  return (
    <div>
      <button onClick={setToNotes}>Notes</button>
      <button onClick={setToScales}>Scales</button>
    </div>
  );
};

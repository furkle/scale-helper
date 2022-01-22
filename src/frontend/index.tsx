import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import FrontPage from './pages/FrontPage';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <FrontPage />
  </StrictMode>,
  rootElement
);

import React from 'react';

import { NoteNames } from '../NoteNames';
import { scaleRecord } from '../scaleRecord';
import {
  GetScale,
} from '../scales';

export default function App() {
  return (
    <div className="App">
      <div>
        <div>
          <p>Natural major scales</p>
          {Object.entries(scaleRecord.NaturalMajor).map((scale) => (
            <div>  
              <ul>
                {Object.values(NoteNames).map((val) => (
                  <li>

                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <p>Natural minor scales</p>
          <ul>

          </ul>
        </div>
      </div>
    </div>
  );
}

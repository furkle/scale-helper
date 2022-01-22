import React from 'react';

// import { NoteNames } from '../NoteNames';
import { scaleRecord } from '../scaleRecord';
// import { GetScale } from '../scales';
import { transformNoteName } from './transformNoteName';

export default function App() {
  return (
    <div className="App">
      <h1>Scale Helper</h1>
      <div>
        <h2>Scales</h2>
        <div>
          <h3>Natural major scales</h3>
          {Object.entries(scaleRecord.NaturalMajor).map(([ rootNote, scale ]) => (
            scale.length ?
              <div>
                <p>
                  <span dangerouslySetInnerHTML={{ __html: transformNoteName(rootNote) + ' major' }} />
                </p>

                <ul>
                  {scale.map((val) => (
                    <li>
                      <span dangerouslySetInnerHTML={{ __html: transformNoteName(val) }} />
                    </li>
                  ))}
                </ul>
              </div> :
              null
          ))}
        </div>

        <div>
          <h3>Natural minor scales</h3>
          {Object.entries(scaleRecord.NaturalMinor).map(([ rootNote, scale ]) => (
            scale.length ? 
              <div>
                <p>
                  <span dangerouslySetInnerHTML={{ __html: transformNoteName(rootNote) + ' minor' }} />
                </p>

                <ul>
                  {scale.map((val) => (
                    <li>
                      <span dangerouslySetInnerHTML={{ __html: transformNoteName(val) }} />
                    </li>
                  ))}
                </ul>
              </div> :
              null
          ))}
        </div>
      </div>
    </div>
  );
}

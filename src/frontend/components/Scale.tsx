import React from 'react';

import { NoteNames } from '../../NoteNames';
import { transformNoteName } from '../transformNoteName';

export const Scale = ({
  rootNote,
  scale,
  typeLabel,
}: { rootNote: NoteNames, scale: NoteNames[], typeLabel: string }) => (
  <div>
    <p>
      <span dangerouslySetInnerHTML={{ __html: `${transformNoteName(rootNote)} ${typeLabel}` }} />
    </p>

    <ul>
      {scale.map((val) => (
        <li>
          <span dangerouslySetInnerHTML={{ __html: transformNoteName(val) }} />
        </li>
      ))}
    </ul>
  </div> 
);

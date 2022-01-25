import React from 'react';

import { chordSizesFilter } from '../chordSizesFilter';
import { ChordSizes } from '../../ChordSizes';
import { ChordText } from '../components/ChordText';
import { ChordTypes } from '../../ChordTypes';
import { includeDuplicateNames } from '../includeDuplicateNames';
import { noteFilter } from './Notes';
import { NoteNames } from '../../NoteNames';
import { playChord } from '../playChord';
import { setChordType } from '../setChordType';
import { BaseNotes } from '../../scales';
import { transformNoteName } from '../transformNoteName';
import { transformNotationToArgs } from '../transformNotationToArgs';

export const Chords = ({
  audioCtx,
  gainNode,
  oscNode,
}: { audioCtx: AudioContext, gainNode: GainNode, oscNode: OscillatorNode }) => {
  const [ curState, setCurState ] = React.useState({
    chordInversion: 0,
    chordRoot: NoteNames.C,
    chordSize: ChordSizes.Triad,
    chordType: ChordTypes.Major,
    custom: false,
    customChordsInput: '',
  });

  const toggleCustomEntry = () => {
    setCurState({
      ...curState,
      custom: !curState.custom,
    });
  };

  const setChordInversion: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCurState({
      ...curState,
      chordInversion: Number(e.target.value),
    });
  };

  const setChordRoot: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCurState({
      ...curState,
      chordRoot: e.target.value as NoteNames,
    });
  };

  const setChordSize: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCurState({
      ...curState,
      chordSize: e.target.value as ChordSizes,
    });
  };

  const setChordTypeFunc = setChordType.bind(null, curState, setCurState);

  const playOptionsChord = () => {
    playChord({
      audioCtx,
      gainNode,
      oscNode,
      baseOctave: 4,
      chordInversion: curState.chordInversion,
      chordRoot: curState.chordRoot,
      chordSize: curState.chordSize,
      chordType: curState.chordType,
    });
  };

  const playCustomChords = () => {
    /*playChord({
      audioCtx,
      gainNode,
      oscNode,
      baseOctave: 4,
      ...transformNotationToArgs(curState.customChordsInput),
    });*/
  };

  const sizeOptionList = chordSizesFilter(Object.values(ChordSizes), curState.chordType);

  return (
    <div>
      <h2>Chords</h2>
      <div>
        <h3>Custom/multi chord entry</h3>
        <input
          checked={curState.custom}
          onChange={toggleCustomEntry}
          type="checkbox"
        />
      </div>

      {curState.custom ?
        <div>
          <input
            value={curState.customChordsInput}
            placeholder="Enter chord notation"
          />

          <button onClick={playCustomChords}>Play custom chords</button>
        </div> :
        null}

      {!curState.custom ?
        <div>
          <div>
            <h3>Chord root</h3>
            <select  onChange={setChordRoot} >
              {Object.values(BaseNotes).filter(noteFilter).map((note) => (
                <option
                  key={note.name}
                  value={note.name}
                >
                  {transformNoteName(includeDuplicateNames(note.name))}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3>Chord type</h3>
            <select onChange={setChordTypeFunc}>
              {Object.values(ChordTypes).map((chordType) => (
                <option
                  key={chordType}
                  value={chordType}
                >
                  {chordType}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3>Chord size</h3>
            <select
              onChange={setChordSize}
              disabled={sizeOptionList.length === 1}
              value={curState.chordSize}
            >
              {sizeOptionList.map((chordSize) => (
                <option
                  key={chordSize}
                  value={chordSize}
                >
                  {chordSize}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3>Chord inversion</h3>
            <select onChange={setChordInversion}>
              <option value={0}>None</option>
              <option value={1}>1st inversion</option>
              <option value={2}>2nd inversion</option>
              <option value={3}>3rd inversion</option>
            </select>
          </div>

          <ChordText
            chordRoot={curState.chordRoot}
            chordSize={curState.chordSize}
            chordType={curState.chordType}
          />

          <div>
            <button onClick={playOptionsChord}>Play chord</button>
          </div>
        </div> :
        null}
    </div>
  );
};

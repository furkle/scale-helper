import React from 'react';
import { ChordSizes } from '../../ChordSizes';
import { ChordTypes } from '../../ChordTypes';
import { NoteNames } from '../../NoteNames';
import { BaseNotes } from '../../scales';
import { ChordText } from '../components/ChordText';
import { includeDuplicateNames } from '../includeDuplicateNames';
import { transformNoteName } from '../transformNoteName';
import { noteFilter } from './Notes';

export const Chords = ({
  audioCtx,
  gainNode,
  oscNode,
}: { audioCtx: AudioContext, gainNode: GainNode, oscNode: OscillatorNode }) => {
  const [ curState, setCurState ] = React.useState({
    chordRoot: NoteNames.C,
    chordType: ChordTypes.Major,
    chordSize: ChordSizes.Triad,
    custom: false,
    customChordsInput: '',
  });

  const toggleCustomEntry = () => {
    setCurState({
      ...curState,
      custom: !curState.custom,
    });
  };

  const setChordRoot: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCurState({
      ...curState,
      chordRoot: e.target.value as NoteNames,
    });
  };

  const setChordType: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCurState({
      ...curState,
      chordType: e.target.value as ChordTypes,
    });
  };

  const setChordSize: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCurState({
      ...curState,
      chordSize: e.target.value as ChordSizes,
    });
  };

  const playOptionsChord = () => {

  };

  const playCustomChords = () => {

  };

  const optionList = Object.values(ChordSizes).filter((size) => {
    if (curState.chordType === ChordTypes.Power) {
      return size === ChordSizes.Power;
    } else if (curState.chordType === ChordTypes.Augmented) {
      return size === ChordSizes.Triad || size === ChordSizes.Seventh;
    } else if (curState.chordType === ChordTypes.Diminished) {
      return size === ChordSizes.Triad || size === ChordSizes.Seventh;
    } else if (curState.chordType === ChordTypes.Dominant) {
      return size === ChordSizes.Seventh;
    } else if (curState.chordType === ChordTypes.Major) {
      return size === ChordSizes.Triad ||
        size === ChordSizes.Sixth ||
        size === ChordSizes.Seventh;
    } else if (curState.chordType === ChordTypes.Minor) {
      return size === ChordSizes.Triad ||
        size === ChordSizes.Sixth ||
        size === ChordSizes.Seventh;
    } else if (curState.chordType === ChordTypes.Suspended) {
      return size === ChordSizes.Second || size === ChordSizes.Fourth;
    }
  });

  return (
    <div>
      <h2>Chords</h2>
      <div>
        <span>Custom/multi chord entry</span>
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
            <span>Chord root</span>
            <select onChange={setChordRoot} >
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
            <span>Chord type</span>
            <select onChange={setChordType}>
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
            <span>Chord size</span>
            <select
              onChange={setChordSize}
              disabled={optionList.length === 1}
              value={curState.chordSize}
            >
              {optionList.map((chordSize) => (
                <option
                  key={chordSize}
                  value={chordSize}
                >
                  {chordSize}
                </option>
              ))}
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

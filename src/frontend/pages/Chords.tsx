import React from 'react';

import { ChordInversionSelect } from '../components/ChordInversionSelect';
import { ChordNotationCustomEntry } from '../components/ChordNotationCustomEntry';
import { ChordRootSelect } from '../components/ChordRootSelect';
import { ChordSizeSelect } from '../components/ChordSizeSelect';
import { ChordSizes } from '../../ChordSizes';
import { chordSizesFilter } from '../chordSizesFilter';
import { ChordText } from '../components/ChordText';
import { ChordTypes } from '../../ChordTypes';
import { ChordTypeSelect } from '../components/ChordTypeSelect';
import { NoteNames } from '../../NoteNames';
import { playChord } from '../playChord';
import { setChordType } from '../setChordType';

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

      <ChordNotationCustomEntry
        inputValue={curState.customChordsInput}
        isChecked={curState.custom}
        playCustomChords={playCustomChords}
        toggleCustomEntry={toggleCustomEntry}
      />

      {!curState.custom ?
        <div>
          <ChordRootSelect setChordRoot={setChordRoot} />
          
          <ChordTypeSelect setChordType={setChordTypeFunc} />

          <ChordSizeSelect
            chordSize={curState.chordSize}
            setChordSize={setChordSize}
            sizeOptionList={sizeOptionList}
          />

          <ChordInversionSelect setChordInversion={setChordInversion} />

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

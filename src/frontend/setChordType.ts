import { ChordSizes } from '../ChordSizes';
import { ChordTypes } from '../ChordTypes';
import { NoteNames } from '../NoteNames';

export const setChordType = (
  curState: {
    chordRoot: NoteNames,
    chordType: ChordTypes,
    chordSize: ChordSizes,
    custom: boolean,
    customChordsInput: string,
  },

  setCurState: React.Dispatch<React.SetStateAction<{
    chordRoot: NoteNames;
    chordType: ChordTypes;
    chordSize: ChordSizes;
    custom: boolean;
    customChordsInput: string;
  }>>,

  e: React.ChangeEvent<HTMLSelectElement>,
) => {
  const chordType = e.target.value as ChordTypes;
  if (chordType === ChordTypes.Power) {
    setCurState({
      ...curState,
      chordType,
      chordSize: ChordSizes.Power,
    });  
  } else if (chordType === ChordTypes.Minor || chordType === ChordTypes.Major) {
    if (curState.chordSize === ChordSizes.Second ||
        curState.chordSize === ChordSizes.Fourth ||
        curState.chordSize === ChordSizes.Sixth)
    {
      setCurState({
        ...curState,
        chordType,
        chordSize: ChordSizes.Triad,
      });
    } else {
      setCurState({
        ...curState,
        chordType,
      });
    }
  } else if (chordType === ChordTypes.Augmented || chordType === ChordTypes.Diminished) {
    if (curState.chordSize !== ChordSizes.Triad && curState.chordSize !== ChordSizes.Seventh) {
      setCurState({
        ...curState,
        chordType,
        chordSize: ChordSizes.Triad,
      });
    } else {
      setCurState({
        ...curState,
        chordType,
      });
    }
  } else if (chordType === ChordTypes.AugmentedMajor || chordType === ChordTypes.HalfDiminished) {
    setCurState({
      ...curState,
      chordType,
      chordSize: ChordSizes.Seventh,
    });
  } else if (chordType === ChordTypes.Suspended) {
    setCurState({
      ...curState,
      chordType,
      chordSize: ChordSizes.Second,
    });
  } else if (chordType === ChordTypes.Dominant) {
    if (curState.chordSize !== ChordSizes.Seventh &&
        curState.chordSize !== ChordSizes.Ninth &&
        curState.chordSize !== ChordSizes.Eleventh &&
        curState.chordSize !== ChordSizes.Thirteenth)
    {
      setCurState({
        ...curState,
        chordType,
        chordSize: ChordSizes.Seventh,
      });
    } else {
      setCurState({
        ...curState,
        chordType,
      });
    }
  } else {
    setCurState({
      ...curState,
      chordType,
    });
  }
};
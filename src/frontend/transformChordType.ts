import { ChordTypes } from '../ChordTypes';

export const transformChordType = (chordType: ChordTypes) => {
  if (chordType === ChordTypes.Augmented) {
    return 'aug';
  } else if (chordType === ChordTypes.Diminished) {
    return 'dim';
  } else if (chordType === ChordTypes.Dominant) {
    return 'dom';
  } else if (chordType === ChordTypes.Major) {
    return 'maj';
  } else if (chordType === ChordTypes.Minor) {
    return 'min';
  } else if (chordType === ChordTypes.Suspended) {
    return 'sus'
  }

  return '';
};

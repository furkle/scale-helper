import { ChordSizes } from '../ChordSizes';

export const transformChordSize = (chordSize: ChordSizes): string => {
  if (chordSize === ChordSizes.Second) {
    return '2';
  } else if (chordSize === ChordSizes.Fourth) {
    return '4';
  } else if (chordSize === ChordSizes.Power) {
    return '5';
  } else if (chordSize === ChordSizes.Sixth) {
    return '6';
  } else if (chordSize === ChordSizes.Seventh) {
    return '7';
  } else if (chordSize === ChordSizes.Ninth) {
    return '9';
  } else if (chordSize === ChordSizes.Eleventh) {
    return '11';
  } else if (chordSize === ChordSizes.Thirteenth) {
    return '13';
  }

  return '';
};

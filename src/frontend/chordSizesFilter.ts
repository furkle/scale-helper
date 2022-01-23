import { ChordSizes } from "../ChordSizes";
import { ChordTypes } from "../ChordTypes";

export const chordSizesFilter = (chords: ChordSizes[], chordType: ChordTypes) => {
  return chords.filter((size) => {
    if (chordType === ChordTypes.Power) {
      return size === ChordSizes.Power;
    } else if (chordType === ChordTypes.Augmented) {
      return size === ChordSizes.Triad || size === ChordSizes.Seventh;
    } else if (chordType === ChordTypes.AugmentedMajor) {
      return size === ChordSizes.Seventh;
    } else if (chordType === ChordTypes.Diminished) {
      return size === ChordSizes.Triad || size === ChordSizes.Seventh;
    } else if (chordType === ChordTypes.HalfDiminished) {
      return size === ChordSizes.Seventh;
    } else if (chordType === ChordTypes.Dominant) {
      return size === ChordSizes.Seventh ||
        size === ChordSizes.Ninth ||
        size === ChordSizes.Eleventh ||
        size === ChordSizes.Thirteenth;
    } else if (chordType === ChordTypes.Major) {
      return size === ChordSizes.Triad ||
        size === ChordSizes.Sixth ||
        size === ChordSizes.Seventh ||
        size === ChordSizes.Ninth ||
        size === ChordSizes.Eleventh ||
        size === ChordSizes.Thirteenth;
    } else if (chordType === ChordTypes.Minor) {
      return size === ChordSizes.Triad ||
        size === ChordSizes.Sixth ||
        size === ChordSizes.Seventh ||
        size === ChordSizes.Ninth ||
        size === ChordSizes.Eleventh ||
        size === ChordSizes.Thirteenth;
    } else if (chordType === ChordTypes.Suspended) {
      return size === ChordSizes.Second || size === ChordSizes.Fourth;
    }
  });
};

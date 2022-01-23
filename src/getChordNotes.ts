import { BaseNotes } from './scales';
import { ChordSizes } from './ChordSizes';
import { ChordTypes } from './ChordTypes';
import { NoteNames } from './NoteNames';

export const getChordNotes = ({
  chordInversion,
  chordRoot,
  chordSize,
  chordType,
}: {
  chordInversion: number;
  chordRoot: NoteNames;
  chordSize: ChordSizes;
  chordType: ChordTypes;
}): NoteNames[] => {
  const retArr = [];
  if (chordType === ChordTypes.Power) {
    retArr.push(...getPowerChordNotes(chordRoot));
  } else if (chordType === ChordTypes.Major) {
    retArr.push(...getMajorChordNotes(chordRoot, chordSize));
  } else if (chordType === ChordTypes.Minor) {
    retArr.push(...getMinorChordNotes(chordRoot, chordSize));
  } else if (chordType === ChordTypes.Dominant) {
    retArr.push(...getDominantChordNotes(chordRoot, chordSize));
  } else if (chordType === ChordTypes.Augmented) {
    retArr.push(...getAugmentedChordNotes(chordRoot, chordSize));
  } else if (chordType === ChordTypes.AugmentedMajor) {
    retArr.push(...getAugmentedMajorChordNotes(chordRoot, chordSize));
  } else if (chordType === ChordTypes.Diminished) {
    retArr.push(...getDiminishedChordNotes(chordRoot, chordSize));
  } else if (chordType === ChordTypes.HalfDiminished) {
    retArr.push(...getHalfDiminishedChordNotes(chordRoot, chordSize));
  } else if (chordType === ChordTypes.Suspended) {
    retArr.push(...getSuspendedChordNotes(chordRoot, chordSize));
  }

  const withInversion = handleInversion(retArr, chordInversion);

  return withInversion;
};

export const getPowerChordNotes = (chordRoot: NoteNames) => {
  const twelveTones = Object.values(BaseNotes).map(({ name }) => name);
  const rootIdx = twelveTones.indexOf(chordRoot);
  return [
    chordRoot,
    twelveTones[(rootIdx + 5) % 12],
  ];
}

export const getMajorChordNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {
  if (chordSize === ChordSizes.Sixth) {
    return getMajorSixthNotes(chordRoot, chordSize);
  } else if (chordSize === ChordSizes.Seventh) {
    return getMajorSeventhNotes(chordRoot, chordSize);
  } else if (chordSize === ChordSizes.Ninth) {
    return getMajorNinthNotes(chordRoot, chordSize);
  } else if (chordSize === ChordSizes.Eleventh) {
    return getMajorEleventhNotes(chordRoot, chordSize);
  } else if (chordSize === ChordSizes.Thirteenth) {
    return getMajorThirteenthNotes(chordRoot, chordSize);
  }

  return getMajorTriadNotes(chordRoot, chordSize);
};

export const getMajorTriadNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMajorSixthNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMajorSeventhNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMajorNinthNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMajorEleventhNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMajorThirteenthNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMinorChordNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {
  if (chordSize === ChordSizes.Sixth) {
    return getMinorSixthNotes(chordRoot, chordSize);
  } else if (chordSize === ChordSizes.Seventh) {
    return getMinorSeventhNotes(chordRoot, chordSize);
  } else if (chordSize === ChordSizes.Ninth) {
    return getMinorNinthNotes(chordRoot, chordSize);
  } else if (chordSize === ChordSizes.Eleventh) {
    return getMinorEleventhNotes(chordRoot, chordSize);
  } else if (chordSize === ChordSizes.Thirteenth) {
    return getMinorThirteenthNotes(chordRoot, chordSize);
  }

  return getMinorTriadNotes(chordRoot, chordSize);
};

export const getMinorTriadNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMinorSixthNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMinorSeventhNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMinorNinthNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMinorEleventhNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getMinorThirteenthNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getDominantChordNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {
  if (chordSize === ChordSizes.Ninth) {
    return getDominantNinthNotes(chordRoot, chordSize);
  } else if (chordSize === ChordSizes.Eleventh) {
    return getDominantEleventhNotes(chordRoot, chordSize);
  } else if (chordSize === ChordSizes.Thirteenth) {
    return getDominantThirteenthNotes(chordRoot, chordSize);
  }

  return getDominantSeventhNotes(chordRoot, chordSize);
};

export const getDominantSeventhNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getDominantNinthNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getDominantEleventhNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getDominantThirteenthNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getAugmentedChordNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {
  if (chordSize === ChordSizes.Seventh) {
    return getAugmentedSeventhNotes(chordRoot, chordSize);
  }

  return getAugmentedTriadNotes(chordRoot, chordSize);
};

export const getAugmentedTriadNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getAugmentedSeventhNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getAugmentedMajorChordNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getDiminishedChordNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {
  if (chordSize === ChordSizes.Seventh) {
    return getDiminishedSeventhNotes(chordRoot, chordSize);
  }

  return getDiminishedTriadNotes(chordRoot, chordSize);
};

export const getDiminishedTriadNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getDiminishedSeventhNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getHalfDiminishedChordNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getSuspendedChordNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes
): NoteNames[] => {
  if (chordSize === ChordSizes.Fourth) {
    return getSuspendedFourthNotes(chordRoot, chordSize);
  }

  return getSuspendedSecondNotes(chordRoot, chordSize);
};

export const getSuspendedSecondNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const getSuspendedFourthNotes = (
  chordRoot: NoteNames,
  chordSize: ChordSizes,
): NoteNames[] => {

};

export const handleInversion = (
  chordNotes: NoteNames[],
  chordInversion: number,
): NoteNames[] => {
  let retArr = chordNotes;
  if (chordInversion === 1) {
    retArr = [
      chordNotes[1],
      chordNotes[0],
      ...chordNotes.slice(2),
    ];
  } else if (chordInversion === 2) {
    retArr = [
      chordNotes[2],
      chordNotes[0],
      chordNotes[1],
      ...chordNotes.slice(3),
    ];
  } else if (chordInversion === 3) {
    retArr = [
      chordNotes[3],
      chordNotes[0],
      chordNotes[1],
      chordNotes[2],
      ...chordNotes.slice(4),
    ];
  }

  return retArr;;
};

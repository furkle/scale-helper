import { getScale } from '..';
import { Note } from './Note';
import { NoteNames } from './NoteNames';
import { ScalePatterns } from './ScalePatterns';

export const getScaleDegreeNote = (
  rootNote: Note | NoteNames,
  pattern: ScalePatterns,
  degree: number | string,
): Note => {
  const noteName = rootNote instanceof Note ? rootNote.name : rootNote;
  const scale = getScale(noteName, pattern);
  const degreeNum: number = typeof degree === 'number' ? degree : transformRomanToInt(degree);

  return scale.notes[degreeNum - 1];
};

const transformRomanToInt = (degree: string): number => {
  const lowerDegree = degree.toLowerCase().trim();
  if (lowerDegree === 'i') {
    return 1;
  } else if (lowerDegree === 'ii') {
    return 2;
  } else if (lowerDegree === 'iii') {
    return 3;
  } else if (lowerDegree === 'iv') {
    return 4;
  } else if (lowerDegree === 'v') {
    return 5;
  } else if (lowerDegree === 'vi') {
    return 6;
  } else if (lowerDegree === 'vii') {
    return 7;
  }

  return -1;
}

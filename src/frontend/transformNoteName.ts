export const transformNoteName = (note: string) => (
  note.replace('Sharp', '\u266f').replace('Flat', '\u266d')
);
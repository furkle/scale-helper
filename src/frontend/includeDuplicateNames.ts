export const includeDuplicateNames = (name: string) => {
  if (name === 'CSharp') {
    return 'CSharp/DFlat';
  } else if (name === 'DSharp') {
    return 'DSharp/EFlat';
  } else if (name === 'FSharp') {
    return 'FSharp/GFlat';
  } else if (name === 'GSharp') {
    return 'GSharp/AFlat';
  } else if (name === 'ASharp') {
    return 'ASharp/BFlat';
  }

  return name;
};

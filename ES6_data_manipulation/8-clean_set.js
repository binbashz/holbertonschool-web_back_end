function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  const cleanedValues = [];

  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  }

  return cleanedValues.join('-');
}

export default cleanSet;


function cleanSet(Set, startString) {
  const cleanedValues = [];

  for (const value of Set) {
    if (value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  }

  return cleanedValues.join('-');
}

export default cleanSet;



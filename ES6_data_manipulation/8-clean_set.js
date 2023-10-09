export default function cleanSet(set, startString) {
  // Use the filter() method to select values that start with startString
  const selectedValues = [...set].filter((value) => value.startsWith(startString));

  // Join the selected values with "-"
  const resultString = selectedValues.join('-');

  return resultString;
}


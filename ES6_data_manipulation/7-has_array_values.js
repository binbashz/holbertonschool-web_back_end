function hasValuesFromArray(set, arr) {
  // Use the every() method to check if all elements in the array are in the set
  return arr.every((data) => set.has(data));
}

export default function createInt8TypedArray(length, position, value) {
  // Check if the provided position is outside the valid range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  // Create a DataView to work with the ArrayBuffer
  const dataView = new DataView(buffer);

  // Set the Int8 value at the specified position within the DataView
  dataView.setInt8(position, value);

  // Return the DataView as an ArrayBuffer
  return buffer;
}


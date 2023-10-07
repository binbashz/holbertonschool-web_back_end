// Define a function named divideFunction, that makes two arguments: numerator and denominator.
export default function divideFunction(numerator, denominator) {
  // Check if the 'denominator' is equal to 0
  if (denominator === 0) {
    // If 'denominator' is 0, throw a new Error with the message 'cannot divide by 0'
    throw new Error('cannot divide by 0');
  }

  // If 'denominator' is not 0, perform the division and return the result
  return numerator / denominator;
}

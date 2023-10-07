export default function guardrail(mathFunction) {
  // Create an empty array called 'queue' to store results and messages.
  const queue = [];

  try {
    // Attempt to execute the 'mathFunction'.
    const result = mathFunction();
    // If successful, push the result to the 'queue'.
    queue.push(result);
  } catch (error) {
    // If an error occurs during execution, push the error message to the 'queue'.
    queue.push(`Error: ${error.message}`);
  } finally {
    // Regardless of success or error, add the 'Guardrail was processed' message to the 'queue'.
    queue.push('Guardrail was processed');
  }

  // Return the 'queue' containing results and messages.
  return queue;
}

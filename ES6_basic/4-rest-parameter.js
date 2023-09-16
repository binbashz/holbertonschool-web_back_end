export default function returnHowManyArguments(...args) {
  // The rest parameter '...args' collects all the arguments passed to the function into an array
  return args.length;
}

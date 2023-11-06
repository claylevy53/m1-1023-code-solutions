/* exported sumAll */

function sumAll(numbers) {
  let sum = 0;
  for (const nums of numbers) {
    sum += nums;
  }
  return sum;
}

/* exported oddOrEven */

function oddOrEven(numbers) {
  const returnArray = [];
  for (const items of numbers) {
    if (items % 2 === 0) {
      returnArray.push('even');
    } else {
      returnArray.push('odd');
    }
  }
  return returnArray;
}

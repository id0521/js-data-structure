//bubbleSort O(N^2) due to nested for loops
const arr = [100, 78, 20, 50, 88, 5, 2];

console.log(bubbleSort(arr));

function bubbleSort(arr) {
  const sortedArr = [...arr];
  for (let i = sortedArr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        const hold = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = hold;
      }
    }
  }

  return sortedArr;
}

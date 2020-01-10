// data structure opreations: insertion, deletion, traversal, searching, sorting, access

//for ordered array
//O(N)
function linearSearch(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }

    if (value < arr[i]) {
      return -1;
    }
  }
}

//O(logN)
function binaraySearch(arr, value) {
  var startingIndex = 0;
  var endingIndex = arr.length - 1;
  var searchIndex;

  while (startingIndex <= endingIndex) {
    searchIndex = Math.floor((startingIndex + endingIndex) / 2);

    if (value === arr[searchIndex]) {
      return searchIndex;
    }

    if (value > arr[searchIndex]) {
      startingIndex = searchIndex + 1;
    }

    if (value < arr[searchIndex]) {
      endingIndex = searchIndex - 1;
    }
  }
  return -1;
}

console.log(binaraySearch([1, 2], 0));

//selectionSort technically O(N^2/2) but big O ignores constant
function selectionSort(arr) {
  var lowestIndex;
  for (let i = 0; i < arr.length - 1; i++) {
    lowestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowestIndex] > arr[j]) {
        lowestIndex = j;
      }
    }

    if (lowestIndex !== i) {
      var temp = arr[i];
      arr[i] = arr[lowestIndex];
      arr[lowestIndex] = temp;
    }
  }
  return arr;
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}
//insertionSort  O(N^2 + N) => O(N^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var temp = arr[i];
    var index = i;
    while (arr[index - 1] > temp && index > 0) {
      arr[index] = arr[index - 1];
      index--;
    }
    arr[index] = temp;
  }
  return arr;
}
console.log(insertionSort([4, 3, 2, 1]));

//factorial
function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(3));

//linkedlist
class Node {
  constructor(element) {
    this.element = element;
  }
}

var node1 = new Node('abc');
var node2 = new Node('def');
node1.next = node2;

function uniqueString(str) {
  const map = {};

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      return false;
    }
    map[str[i]] = true;
  }

  return true;
}

//recursion
function findFactorialRecursive(num) {
  if (num === 1) {
    return num;
  }

  return num * findFactorialRecursive(num - 1);
}

function findFactorialIterative(num) {
  let product = 1;

  for (let i = 1; i <= num; i++) {
    product *= i;
  }

  return product;
}

//fibonacci  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
function fibonacciIterative(n) {
  if (n < 2) {
    return n;
  }

  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}

//O(2^n)
function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + findFactorialRecursive(n - 2);
}

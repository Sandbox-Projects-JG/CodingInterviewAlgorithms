// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let smaller = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = smaller;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (i !== indexOfMin) {
      let smaller = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = smaller;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  //we'll cut the array into half to form a 'left' and 'right' array
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  //mergeSort recursion passes in the left and right arrays then returns the entire sorted array with 'merge' being called
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  //creates a new empty array that takes everything from each of these arrays
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

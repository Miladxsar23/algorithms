/**
 * selectionSort with dynamic programming aproach
 */

function min(list) {
  let minimum = list[0];
  let minimum_index = 0;
  for (let i = 0; i < list.length; i++) {
    if (minimum > list[i]) {
      minimum = list[i];
      minimum_index = i;
    }
  }
  return minimum_index;
}

function selectionSort(list) {
  let newArr = [];
  let n = list.length;
  for (let i = 0; i < n; i++) {
    let smallestIndex = min(list);
    newArr.push(list[smallestIndex]);
    list = [
      ...list.slice(0, smallestIndex),
      ...list.slice(smallestIndex + 1, list.length),
    ];
  }
  return newArr;
}
const test = [2, 42, 1, 7, 54, 0.6, 0.4];
console.log(selectionSort(test));

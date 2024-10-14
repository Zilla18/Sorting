function insertionSort(array) {
  for (let i = 1; index < array.length; i++) {
    let current = array[i];
    let a = i - 1;

    while (j >= 0 && array[a] > current) {
      array[a + 1] = array[b];
      a--;
    }
    array[a + 1] = current; // Insert the current element into the sorted part
  }
  return array;
}

let arraySample = [4, 6, 9, 4, 0];

console.log("Unsorted array:", arraySample);

let sortedArray = insertionSort(arraySample);

console.log("Sorted array:", sortedArray);

function bubbleSort(array) {
  for (let i = 1; i <= array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let biggerVal = array[j];
        array[j] = array[j + 1];
        array[j + 1] = biggerVal;
      }
    }
    console.log(array);
  }
  return array;
}

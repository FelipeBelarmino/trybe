let array = [5, 3, 2, 4, 7, 1, 0, 6];
let position = 0;

for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      position = array[i];

      array[i] = array[j];
      array[j] = position;
    }
  }
}

console.log(array);
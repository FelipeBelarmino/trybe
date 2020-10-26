let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27],
  maior = 0;
for (i in numbers) {
  if (maior <= numbers[i]) {
    maior = numbers[i];
  }
}
console.log(`O maior numero do array é: ${maior}`);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27],menor = 1000;
for (i in numbers) {
  if (menor >= numbers[i]) {menor = numbers[i];}}
console.log(`O menor numero do array é: ${menor}`);
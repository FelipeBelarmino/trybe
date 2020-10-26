let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27],
  impar = 0;
for (i in numbers) {
  if (numbers[i] / 2 != 1) {
    impar++;
  }
}
if (impar > 0) {
  console.log(`Há ${impar} números ímpares no array`);
} else {
  console.log("Nenhum valor ímpar encontrado");
}
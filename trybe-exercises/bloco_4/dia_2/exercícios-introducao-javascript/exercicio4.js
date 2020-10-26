let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27],soma = 0,cont = numbers.length;
for (i in numbers) {soma += numbers[i];}
  if (soma / cont > 20) {console.log("Valor maior que 20");} 
    else {console.log("Valor menor que 20");}
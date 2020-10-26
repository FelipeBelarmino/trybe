let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let cont = numbers.length;;

for (i in numbers) {    
    soma+=numbers[i]
}


// console.log(`O total é: ${soma}`)
console.log(`A média aritimética é: ${soma/cont}`)
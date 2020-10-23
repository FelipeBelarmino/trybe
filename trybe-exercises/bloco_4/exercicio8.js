let num1 = 1%2== 0;
let num2 = 2%2== 0;
let num3 = 3%2== 0;

if (num1 || num2 || num3){
    console.log("Ao menos uma é par")
    return true
} else {
    console.log("Todas são ímpares")
}
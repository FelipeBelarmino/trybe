let num1 = 5%2== 1;
let num2 = 2%2== 1;
let num3 = 10%2== 1;

if (num1 || num2 || num3){
    console.log("Ao menos uma é ímpar")
    return true
} else {
    console.log("Nenhuma é ímpar")
    return false
}
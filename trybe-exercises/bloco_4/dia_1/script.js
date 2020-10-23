//if else
let trybe = 14;
if (trybe >= 14 && trybe <14.40){
    console.log("Esquenta")
} else if (trybe >=16.30 && trybe < 17.50){
    console.log("Aula ao vivo")
} else if (trybe >= 19.40 && trybe < 20){
    console.log("Fechamento")
} else {
    console.log("Fora dos momentos sincronos")
}

//swith cases

let trafficLight = "vermelho"

switch (trafficLight){
    case "vermelho":
         console.log("pare");
         break;

    case "amarelo":
        console.log("atenção");
        break;  

    case "verde":
        console.log("siga");
        break;

    default:console.log("pare");       
}

// Exercícios

let a = 10;
let b = 5;

console.log("Soma: " + (a+b));
console.log("Subtração: " + (a-b));
console.log("Multiplicação: " + (a*b));
console.log("Divisão: " + (a/b));
console.log("Módulo: " + (a%b));
let estudante = {
    nome:"Felipe",
    idade: 31,
    hardSkills: 6,
    softSkills: 5,
    carreiraSkills:5
};

for(let key in estudante){
    // console.log(key,estudante[key])
}

function trybe(estudanteTrybe){
    let pessoaDesenvolvedora=estudanteTrybe;
    pessoaDesenvolvedora.hardSkills=10;
    pessoaDesenvolvedora.softSkills=10;
    pessoaDesenvolvedora.carreiraSkills=10;
    pessoaDesenvolvedora.tryber=true;

    return pessoaDesenvolvedora;
}

console.log(trybe(estudante))

function soma (num1, num2){
    return num1 + num2;
}

let valorSomado=soma(10,5)

console.log(valorSomado)

// estudante.cidade = "São Paulo";
// estudante["comidaFavorita"] = "Feijoada";
// console.log(estudante)


// function n(valor) {
//   for (let i = 0; i < valor; i+=1) {
//     console.log(
//       " ".repeat(valor - (i + 1)) + "*".repeat(i + 1) + "*".repeat(i)
//     );
//   }
// }n(5);

// function geraArray(caractere){
//     let array = [];
//     for (let i=0;i<100;i+=1){
//         array.push(caractere);
//     }
//     return array;
// };

function generateNumber(){ //Função que gera array com 6 números aleatórios        
    let numbers = [];
    for (let i=0;i<6;i+=1){
        numbers.push(randomNumber(100))
    }
    function randomNumber(maxValue){
        return Math.ceil(Math.random()*maxValue) // Função que gera um número aleatório arredondado
    }
    return numbers.sort();
}let megaSennaNumbers = generateNumber();
console.table(megaSennaNumbers)
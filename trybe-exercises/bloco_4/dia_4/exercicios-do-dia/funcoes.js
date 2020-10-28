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
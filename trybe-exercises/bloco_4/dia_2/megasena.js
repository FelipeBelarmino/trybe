let numbersMega=[Math.ceil(Math.random()*60), //array com 6 numeros aleatórios arredondados de 0 a 60
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60)],
    numbersPlayed=[Math.ceil(Math.random()*60), //array com 6 numeros aleatórios arredondados de 0 a 60
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60)],//array de números que o jogador jogou
    numbersOfHits=0;//contador de número de acertos do jogador

// console.log(num[0]) //ceil arredonda, random gera um numero aleatório

for(let i=0;i<numbersMega.length;i++) {
    for (let j=0;j<numbersPlayed.length;j++){
       if (numbersMega[i] === numbersPlayed[j]){
          numbersOfHits++;
       }
    }
}

console.log(`Números da MegaSena: ${numbersMega}`)
console.log(`Números jogados ${numbersPlayed}`)
console.log(`Número de acertos: ${numbersOfHits}`)
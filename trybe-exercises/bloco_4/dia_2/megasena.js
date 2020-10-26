let numbersMega=[Math.ceil(Math.random()*60), //array com 6 numeros aleatórios arredondados de 0 a 60
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60)],
    numbersPlayed=[Math.ceil(Math.random()*60), //array de números que o jogador jogou
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60)],
    numbersPlayed2=[Math.ceil(Math.random()*60), //array de números que o jogador jogou
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60)]
    numbersPlayed3=[Math.ceil(Math.random()*60), //array de números que o jogador jogou
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60),
        Math.ceil(Math.random()*60)];   //array de números que o jogador jogou                                       


let megaSenaGames = [numbersPlayed,numbersPlayed2,numbersPlayed3]

for(let games=0;games<megaSenaGames.length;games++){
    numbersOfHits=0
    for(let i=0;i<numbersMega.length;i++) {
        for (let j=0;j<megaSenaGames[games].length;j++){
           if (numbersMega[i] === megaSenaGames[games][j]){
              numbersOfHits++;
           }
        }
    }
    console.log(`Jogada: ${(games+1)}`)
    console.log(`Números da MegaSena: ${numbersMega}`)
    console.log(`jogo: ${megaSenaGames[games]}`)
    console.log(`Números de acertos: ${numbersOfHits}`)
    console.log("---------------------------------------------------")
}

// for(let i=0;i<numbersMega.length;i++) {
//     for (let j=0;j<numbersPlayed2.length;j++){
//        if (numbersMega[i] === numbersPlayed2[j]){
//           numbersOfHits2++;
//        }
//     }
// }
// for(let i=0;i<numbersMega.length;i++) {
//     for (let j=0;j<numbersPlayed3.length;j++){
//        if (numbersMega[i] === numbersPlayed3[j]){
//           numbersOfHits3++;
//        }
//     }
// }


// console.log(`Números jogados ${numbersPlayed}`)
// console.log(`Números jogados ${numbersPlayed2}`)
// console.log(`Números jogados ${numbersPlayed3}`)
// console.log(`Número de acertos: ${numbersOfHits}`)
// console.log(`Número de acertos: ${numbersOfHits2}`)
// console.log(`Número de acertos: ${numbersOfHits3}`)
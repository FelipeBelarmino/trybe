let num =[8,1,5,7,6,3,4,2]


console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(num[1]) //mostra a posição que vc quer do array
console.log(`Nosso vetor ordenado é ${num.sort()}`) //ordena array


for(let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)    
}


for(let pos in num){  //forma mais moderna de for
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) 
}

console.log(num.indexOf(7)) // indexOf verifica se há o elemento no array, caso não tenha retorna -1


let pos = num.indexOf(4)

if (pos == -1){
    console.log("O valor não foi encontrado!")
} else {
    console.log(`O valor está na posição ${pos}`)
}
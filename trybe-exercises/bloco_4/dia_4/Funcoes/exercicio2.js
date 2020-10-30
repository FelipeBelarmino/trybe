// function retornaMaior (){

// }
let array=[2, 3, 6, 7, 10, 1, 2]
let maior = 0,menor=0,last=0;

for (let i=0; i<array.length; i++){

    maior = array[i]
    menor = array[i-1]

    last = array.lastIndexOf()

    if (menor<maior){

        maior=array[i]
    } 
    // console.log(array[i+1])
}
let max = Math.max(...array)
console.log(Math.max(max))

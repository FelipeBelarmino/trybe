let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27],numbers2 = [];
for (let i = 0; i < numbers.length; i++) {    
    if (numbers[i+1]!=null){numbers2.push(numbers[i]*numbers[i+1])}
}console.log(`O novo array é: ${numbers2}`);
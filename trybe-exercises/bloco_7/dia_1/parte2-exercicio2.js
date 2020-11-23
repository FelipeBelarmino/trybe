const longestWord = (string) => { 
    let splited = string
    .split(' ')
    .reduce((longest, currentWord)=>currentWord.length > longest.length ? currentWord : longest);
    return splited;
};

console.log(longestWord("Antônio foi no banheiro e não sabemosssssssss o que aconteceu"))

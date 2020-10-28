function verificaPalindrome(str) {   //Obs: function consultada no link:https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
    var re = /[\W_]/g; // Esta variável recebe algumas verificações como se há espaços em branco, caracteres especiais ou letras maiúsculas
    var lowRegStr = str.toLowerCase().replace(re, ''); // Recebe a string convertida em minúsculo e já sem espaços ou caracteres
    var reverseStr = lowRegStr.split('').reverse().join(''); //Recebe lowRegStr reversa e depois retira os espaços com join
    return console.log(reverseStr === lowRegStr) //Retorna um booleano True caso "reverseStr===lowRegStr"
  }
  verificaPalindrome("racecar")
// Cookies
// Cookies são dados salvos em pequenos arquivos de texto no computador da pessoa que utiliza Internet.
// Quando o servidor envia a página web para o browser, a conexão é desligada, e o servidor não tem acesso à pessoa que realizou a requisição. Cookies foram inventados para salvar dados das pessoas no próprio browser delas, pois, dessa forma, uma página conseguirá acessá-los para executar uma lógica com os parâmetros personalizados por pessoa.
// Leia este texto do Mozilla Docs, além deste do W3Schools, para aprender sobre Cookies e ver exemplos de uso.
// Local e Session Storage
// HTML Web Storage provê dois objetos para armazenamento de dados no cliente (browser da pessoa), no formato de key/value de um modo mais intuitivo do que nos Cookies:
// localStorage - salva os dados sem data de expiração. Os dados não serão removidos quando o browser for fechado, ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos.
// Exemplo de utilização:


console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
localStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
localStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
localStorage.clear() // limpa todas as entradas salvas em localStorage
console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0



//Session storage salva os dados apenas enquanto o usuário está na página

//sessionStorage - salva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba (tab) ou o browser.
// Exemplo de utilização:


console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
sessionStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
console.log(sessionStorage.getItem("lastname")) // retorna o valor "Smith"
console.log(sessionStorage.length) // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
console.log(sessionStorage.length) // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear() // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0


//É possível salvar outras estruturas em localStorage e sessionStorage:

let organization = {
    name: "trybe",
    since: 2019
  }
  
  // object "storage" can be localStorage or sessionStorage
  
  storage.setItem("trybe", JSON.stringify(organization))
  let org = JSON.parse(storage.getItem("trybe"))
  console.log(org) // { name: "trybe", since: 2019 }
  
  let classes = ["2019/set", "2019/oct"]
  storage.setItem("classes", JSON.stringify(classes))
  let cls = JSON.parse(storage.getItem("classes"))
  console.log(cls) // ["2019/set", "2019/oct"]


  let carro = {motor:'asdfaf'};

  console.log(carro['motor'])
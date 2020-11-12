let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

let selectEstados = document.getElementById('id-estado');
let estadosOption = document.createElement('option');


for (let i = 0; i < estados.length; i++) {
    selectEstados[i].appendChild(estados[i])
}
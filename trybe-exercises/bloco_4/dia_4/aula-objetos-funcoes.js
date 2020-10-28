let estudante = {
    nome:"Felipe",
    idade: 31,
    hardSkills: 6,
    softSkills: 5,
    carreiraSkills:5
};

for(let key in estudante){
    console.log(key,estudante[key])
}

// estudante.cidade = "São Paulo";
// estudante["comidaFavorita"] = "Feijoada";
// console.log(estudante)
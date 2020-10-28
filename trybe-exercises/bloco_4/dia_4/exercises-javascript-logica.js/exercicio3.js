let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  info["recorrente"]="sim"; // cria um novo item no objeto
  for(let i in info){
      console.log(i)
  }
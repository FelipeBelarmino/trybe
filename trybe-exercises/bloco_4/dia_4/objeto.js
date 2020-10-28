let singer={
    name:"Milton",
    lastName:"Nascimento",
    nickname:"Bituca",
    age:77,
    bestAlbuns:["Travessia","Clube da esquina","Minas"],
    bornInfo:{
        city:"Rio de Janeiro",
        state:"Rio de Janeiro",
    }
        

};

console.log(`O cantor ${singer.name} ${singer.lastName} possui ${singer.age} anos.`) // acessar items de um objeto

console.log(`O cantor ${singer["name"]} ${singer["lastName"]} possui ${singer["age"]} anos.`) //acesso através de chaves da o mesmo resultado

singer["fullName"]=singer.name + " " + singer.lastName; // cria um novo item no objeto (fullName)

console.log(singer.fullName)

console.log(`O cantor ${singer["name"]} ${singer["lastName"]} nasceu no estado: ${singer.bornInfo.state}.`) //acesso de um objeto dentro de outro objeto
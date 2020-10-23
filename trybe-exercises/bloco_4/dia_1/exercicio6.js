let peca = "torre";


switch (peca){
    case "peão":
         console.log("Anda para frente");
         break;

    case "cavalo":
        console.log("Anda em L de 4 casas");
        break;  

    case "torre":
        console.log("Anda de lado ou para frente");
        break;

    default:console.log("Escreva o nome da peça (peão,cavalo,torre)");       
}
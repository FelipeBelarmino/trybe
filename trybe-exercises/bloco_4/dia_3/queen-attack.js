let posicaoRainhaLinha=4;
let posicaoRainhaColuna=4;
let posicaoPecaLinha=4;
let posicaoPecaColuna=4;
let ataqueBemSucedido=false;


if (posicaoRainhaColuna == posicaoPecaColuna || posicaoRainhaLinha == posicaoRainhaLinha){
    ataqueBemSucedido=true;
}


//verifica diagonal superior direita
for(let supDir = 1; supDir < 8; supDir++){
    let linhaRainha=posicaoRainhaLinha+supDir;
    let colunaRainha=posicaoRainhaColuna+supDir; 

    if (linhaRainha > 8 || colunaRainha > 8){//se o tabuleiro acabou, sai do loop
        break;
    }
    if (posicaoPecaLinha==linhaRainha && posicaoPecaColuna==colunaRainha){
        ataqueBemSucedido=true;
    }
}
//verifica diagonal superior esquerda
for(let supEsq = 1; supEsq < 8; supEsq++){
    let linhaRainha=posicaoRainhaLinha+supEsq;
    let colunaRainha=posicaoRainhaColuna-supEsq;   

    if (linhaRainha > 8 || colunaRainha < 1){//se o tabuleiro acabou, sai do loop
        break;
    }
    if (posicaoPecaLinha==linhaRainha && posicaoPecaColuna==colunaRainha){
        ataqueBemSucedido=true;
    }
}
//verifica diagonal inferior esquerda
for(let infEsq = 1; infEsq < 8; infEsq++){
    let linhaRainha=posicaoRainhaLinha-infEsq;
    let colunaRainha=posicaoRainhaColuna-infEsq;    
    if (linhaRainha < 1 || colunaRainha < 1){//se o tabuleiro acabou, sai do loop
        break;
    }
    if (posicaoPecaLinha==linhaRainha && posicaoPecaColuna==colunaRainha){
        ataqueBemSucedido=true;
    }
}
//verifica diagonal inferior direita
for(let infDir = 1; infDir < 8; infDir++){
    let linhaRainha=posicaoRainhaLinha-infDir;
    let colunaRainha=posicaoRainhaColuna+infDir;    
    if (linhaRainha < 1 || colunaRainha > 8){//se o tabuleiro acabou, sai do loop
        break;
    }
    if (posicaoPecaLinha==linhaRainha && posicaoPecaColuna==colunaRainha){
        ataqueBemSucedido=true;
    }
}





console.log(ataqueBemSucedido)
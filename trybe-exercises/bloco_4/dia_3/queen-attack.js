let posicaoRainhaLinha=4;
let posicaoRainhaColuna=4;
let posicaoPecaLinha=4;
let posicaoPecaColuna=4;
let ataqueBemSucedido=false;






for(let supDir = 1; supDir < 8; supDir++){
    let linhaRainha=posicaoRainhaLinha+supDir;
    let colunaRainha=posicaoRainhaColuna+supDir;
    //se o tabuleiro acabou, sai do loop
    if (linhaRainha > 8 || colunaRainha > 8){
        break;
    }
    if (posicaoPecaLinha==linhaRainha && posicaoPecaColuna==colunaRainha){
        ataqueBemSucedido=true;
    }
}
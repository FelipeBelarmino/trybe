let custo = 1000;
let venda = 1500;


if (custo <0 || venda<0){
    console.log("Insira um valor acima de 0")
} else {
    let lucro = venda-(custo*1.2);
    if (lucro>0){
        console.log("Seu lucro em cima de 1.000 produtos foi de R$ " + (lucro*1000))
    } else {
        console.log("Seu prejuízo em cima de 1.000 produtos foi de R$ " + (lucro*1000))
    }
}
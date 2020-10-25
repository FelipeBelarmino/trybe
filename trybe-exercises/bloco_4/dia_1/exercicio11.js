let salarioBruto=1500.50
let inss;
let ir;
let salario_liquido;

function inss(salarioBruto){
    if (salarioBruto<=1556.94){
        inss=salarioBruto*0.08;    
    } else if (salarioBruto<=2594.92){
        inss=salarioBruto*0.09;         
    } else if (salarioBruto<=5189.82){
        inss=salarioBruto*0.11;    
    } else {
        inss=570.88;
    }
    return inss;
}


if (salarioBruto<=1903.98){
    ir = 0;      
} else if (salarioBruto<=2826.65){
    ir=salarioBruto*0.075;    
    
    
} else if (salarioBruto<=5189.82){
    inss=salarioBruto*0.11;    
    salario_liquido=salario_liquido-inss;
} else {
    salario_liquido=salario_liquido-570.88;
}





function salarioLiquido(salarioBruto){let inss,ir,salario_liquido;
        if (salarioBruto<=1556.94){inss=salarioBruto*0.08;} 
        else if (salarioBruto<=2594.92){inss=salarioBruto*0.09}
        else if (salarioBruto<=5189.82){inss=salarioBruto*0.11} 
        else {inss=570.88} salario_liquido=salarioBruto-inss;
        if (salario_liquido<=1903.98){ir = 0} 
        else if (salario_liquido<=2826.65){ir=(salario_liquido*0.075)-142.8}
        else if (salario_liquido<=3751.05){ir=(salario_liquido*0.15)-354.8} 
        else if (salario_liquido<=4664.68){ir=(salario_liquido*0.225)-636.13} 
        else {ir=(salario_liquido*0.275)-869.36}salario_liquido=salario_liquido-ir;
    return salario_liquido;
}   console.log("Seu salário líquido é de: R$ " + salarioLiquido(3000))
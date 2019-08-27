//operadores

let operadorA;
let operadorB;
let operador;

// variaveis

let resultado = document.querySelector("#resultado");
let reset = document.querySelector("#reset");
let del = document.querySelector("#delete");
let porcentagem = document.querySelector("#porcentagem");
let divisao = document.querySelector("#divisao");
let multiplicar = document.querySelector("#multiplicar");
let subtrair = document.querySelector("#subtrair");
let soma = document.querySelector("#soma");
let raiz = document.querySelector("#raiz");
let igual = document.querySelector("#igual");
let ponto = document.querySelector("#ponto");
let um = document.querySelector("#um");
let dois = document.querySelector("#dois");
let tres = document.querySelector("#tres");
let quatro = document.querySelector("#quatro");
let cinco = document.querySelector("#cinco");
let seis = document.querySelector("#seis");
let sete = document.querySelector("#sete");
let oito = document.querySelector("#oito");
let nove = document.querySelector("#nove");

//eventos

um.onclick = function(){
    resultado.value = resultado.value + um.value;
}

dois.onclick = function(){
    resultado.value = resultado.value + dois.value;
}
tres.onclick = function(){
    resultado.value = resultado.value + tres.value;
}
quatro.onclick = function(){
    resultado.value = resultado.value + quatro.value;
}
cinco.onclick = function(){
    resultado.value = resultado.value + cinco.value;
}
seis.onclick = function(){
    resultado.value = resultado.value + seis.value;
}
sete.onclick = function(){
    resultado.value = resultado.value + sete.value;
}
oito.onclick = function(){
    resultado.value = resultado.value + oito.value;
}
nove.onclick = function(){
    resultado.value = resultado.value + nove.value;
}

zero.onclick = function(){
    resultado.value = resultado.value + zero.value;
}

reset.onclick = function(){
    resetar();
}

soma.onclick = function(){
    operadorA = resultado.value;
    operador = "+";
    limpar();
}

divisao.onclick = function(){
    operadorA = resultado.value;
    operador = "/";
    limpar();
}

multiplicar.onclick = function(){
    operadorA = resultado.value;
    operador = "*";
    limpar();
}

subtrair.onclick = function(){
    operadorA = resultado.value;
    operador = "-";
    limpar();
}

raiz.onclick = function(){
    operadorA = resultado.value;
    operador = "v"
    limpar();
}

porcentagem.onclick = function(){
    operadorA = resultado.value;
    operador = "%";
    limpar();
}

ponto.onclick = function(){
    resultado.value = resultado.value + ".";
}

igual.onclick = function(){
    operadorB = resultado.value;
    resolver();
}


// funções de operação 

function limpar(){
    resultado.value = "";
}

function resetar(){
    resultado.value = "";
    operadorA = 0;
    operadorB = 0;
    operador = "";
}

function resolver(){
    let res = 0;
    switch(operador){
        case "+":
            res = parseFloat(operadorA) + parseFloat(operadorB);
            break;
        
        case "-":
            res = parseFloat(operadorA) - parseFloat(operadorB);
            break;

        case "/":
            res = parseFloat(operadorA) / parseFloat(operadorB);
            break;

        case "*":
            res = parseFloat(operadorA) * parseFloat(operadorB);
            break;
        
        case "v":
            res = Math.sqrt(parseFloat(operadorA));
            break;
        
        case "%":
            res = parseFloat(operadorA) * parseFloat(operadorB) / 100;
            break;
    }
  
    resultado.value = res;
}
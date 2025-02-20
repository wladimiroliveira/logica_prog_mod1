// IMC = PESO/(ALTURA*ALTURA)
const campoPeso = document.getElementById('campoPeso');
const campoAltura =document.getElementById('campoAltura');
const sendButton = document.getElementById('enviarImc');
const paraResult = document.getElementById('paraResult');

campoPeso.focus();

function calculoImc(pe, al){
    let imc = pe/(al*al);
    return imc;
}

/* sendButton.addEventListener('click', calculoImc); */

sendButton.addEventListener('click', function(){
    var peso = Number(campoPeso.value);
    var altura = Number(campoAltura.value);
    let resultImc = calculoImc(peso, altura);
    resultImc = Math.round(resultImc*10)/10;
    paraResult.innerHTML = `O índice de massa corpórea para uma pessoa que pesa ${peso} Kg, e mede ${altura} metros é igual a: ${resultImc} Kg/m²`;
});

// EX 02 -> CALCULAR O FATORIAL DE UM NÚMERO

function fatorial(num){  
    let vezes = num  
    if(num>0){
        while(vezes>1){
            num = num * (vezes - 1);
            vezes--;
        }
        return num;
    } else {
        return 1;
    }
}

document.getElementById('submitValorToFactor').addEventListener('click', function(){
    let resultFatorial = fatorial(Number(document.getElementById('campoValorFatorial').value));
    document.getElementById('fatorialResult').innerHTML = `O valor fatorial do número ${Number(document.getElementById('campoValorFatorial').value)} é igual a ${resultFatorial}.`
});

// EX 03 -> CONVERTER DÓLAR PARA REAL

function convertDolarToReal(vInDolar){
    let dHoje = 4.8;
    vInDolar = vInDolar * dHoje;
    return vInDolar;
};

document.getElementById('enviarDolar').addEventListener('click', function(){
    let resultInReal = convertDolarToReal(Number(document.getElementById('campoValorDolar').value));
    resultInReal = resultInReal.toFixed(2);
    document.getElementById('resultConvert').innerHTML = `Convertendo o valor $${Number(document.getElementById('campoValorDolar').value)} para reais, nós temos o valor de R$${resultInReal}.`;
});

// EX 04 -> CALCULAR ÁREA E PERÍMETRO

const campoLargura = document.getElementById('campoLargura');
const campoComprimento = document.getElementById('campoComprimento');
const enviarDadosSala = document.getElementById('enviarDadosSala');
const areaReult = document.getElementById('areaResult');
const periResult = document.getElementById('periResult');

function calcAreaPerimetro(larg, comp){
    are = larg * comp;
    peri = (larg *2)+(comp*2);
    return [are, peri]
}

enviarDadosSala.addEventListener('click', function(){
    let largura = Number(campoLargura.value);
    let comprimento = Number(campoComprimento.value);
    let [area, perimetro] = calcAreaPerimetro(largura, comprimento);
    
    areaReult.innerHTML = `A area da sua sala é = ${area} m²`;
    periResult.innerHTML = `O perímetro da sua sala é = ${perimetro} m`;
});

// EX 05 -> CALCULO DO PERÍMETRO DE UMA SALA CIRCULAR

const campoRaio = document.getElementById('campoRaio');
const enviarRaio = document.getElementById('enviarRaio');

function calcPerimetroCircular(ra){
    pi = 3.14;
    p = pi * (2 * ra);
    return p;
}

enviarRaio.addEventListener('click', function(){
    let raio = Number(campoRaio.value)
    let resultCircular = calcPerimetroCircular(raio);
    document.getElementById('resultPerimetroCircular').innerHTML = `O perímetro da circunferência cujo raio é ${raio}, é igual a = ${resultCircular}`;
})

// EX 06 -> GERADOR DE TABUADA

const campoNumero = document.getElementById('campoNumero');
const enviarNumero = document.getElementById('enviarNumero');
const resultTabuada = document.getElementById('resultTabuada');
const ex6Container = document.querySelector('.ex06__form');

function gerarTabuadaMulti(num) {
    document.querySelectorAll('.result').forEach(element => {element.remove();});
    let time = 1;
    let res;
    let paraMult;
    let resMensagem;
    while(time <= 10){
        res = num * time;
        resMensagem = `${num} * ${time} = ${res}`;
        paraMult = document.createElement('p');
        paraMult.className = 'result';
        ex6Container.appendChild(paraMult);
        paraMult.innerHTML = resMensagem;
        time++;
    }
}

enviarNumero.addEventListener('click', ()=>gerarTabuadaMulti(Number(campoNumero.value)));
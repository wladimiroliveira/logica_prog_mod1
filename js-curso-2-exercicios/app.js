var randomNum = gerarNumeroAleatorio();
var tentativas = 1;

console.log(randomNum);

var titulo = document.querySelector('h1');
var para = document.querySelector('.texto__paragrafo');

function exibirTexto(tag, texto){
    let nome = document.querySelector(tag);
    nome.textContent = texto;
}

const sendChute = document.getElementById('enviarChute');
const resetButton = document.getElementById('reiniciar');
const campoChute = document.querySelector('input');

function setGameOver(){
    resetButton.removeAttribute('disabled');
    sendChute.disabled = true;
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Adivinhe o número');
    exibirTexto('p', `Digite o número secreto entre 1 e 10`);
}

exibirMensagemInicial();

campoChute.focus();

function verificarChute(){
    
    let chute = campoChute.value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

    if(chute > 0 && chute <= 10) {
        if(chute == randomNum){
            exibirTexto('h1', 'Acertou!');
            exibirTexto('p', mensagemTentativa);
            setGameOver();
        } else {
            if(randomNum > chute){
                exibirTexto('p', 'O número secreto é maior');
            } else {
                exibirTexto('p', 'O número secreto é menor');
            }
            tentativas++;
        limparChute();
        }
    } else if(chute > 10){
        setGameOver();
        exibirTexto('h1', 'Erro!');
        exibirTexto('p', `O número que você inseriu é maior que 10`);
    } else if(chute <= 0){
        setGameOver();
        exibirTexto('h1', 'Erro!');
        exibirTexto('p', `O número que você inseriu é menor que 1`);
    }
};

function gerarNumeroAleatorio() {
    return Math.floor(Math.random()*10)+1;
}

function limparChute() {
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function resetGame() {
    limparChute();
    resetButton.setAttribute('disabled',true);
    randomNum = gerarNumeroAleatorio();
    sendChute.disabled = false;
    exibirMensagemInicial();
    tentativas = 1;
}

sendChute.addEventListener('click', verificarChute);
resetButton.addEventListener('click', resetGame);
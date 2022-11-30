const menorValor = 1;
const maiorValor = 10;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('Número secreto:', numeroSecreto);

const elementoMenorValor = document.getElementById('menorValor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maiorValor')
elementoMaiorValor.innerHTML = maiorValor

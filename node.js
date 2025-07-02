let i = '', senhaGerada = '', randomizadorSenha = '', randomizadorSecundario = '';
const caracteresUsados = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

let quote = 'Voce gostaria de uma senha com numeros e letras repetidas?';
const answer = require('readline');
const rl = answer.createInterface ({
    input: process.stdin,
    output: process.stdout
});

function gerarSenha(tamanho) {
    senhaGerada = '';
    for (i=0; i<tamanho;i++) {
        randomizadorSenha = Math.floor(Math.random()*caracteresUsados.length);
        senhaGerada += caracteresUsados[randomizadorSenha];
    }
    for (i=0;i<tamanho;i++) {
        randomizadorSecundario = Math.floor(Math.random()*caracteresUsados.length/2);
        senhaGerada += caracteresUsados[randomizadorSecundario];
    }
    return senhaGerada
}

rl.question("Quantos caracteres a senha deve ter? ", (input) => {
  const tamanho = parseInt(input);
  if (!isNaN(tamanho) && tamanho>0) {
    const senha = gerarSenha(tamanho);
    console.log(`Sua senha gerada e: ${senha}`);
  } else {
    console.log("Por favor, insira um numero valido maior que zero.");
  }
  rl.close();
});

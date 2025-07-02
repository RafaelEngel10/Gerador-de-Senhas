let i = '', senhaGerada = '', randomizadorSenha = '', randomizadorSecundario = '';
const caracteresUsados = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';


let quote = 'Voce gostaria de uma senha com numeros e letras repetidas?';
console.log(quote);
let lineReader = require('lineReader');

const rl = lineReader.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question('quote', (answer) => {
    console.log('Certo, sua resposta foi registrada!');
    rl.close();
});

if (answer=='Sim' || answer=='sim') {
    function gerarSenhaCondicionada(tamanho) {
        senhaGerada = '';
        for (i=0;i<tamanho;i++) {
            randomizadorSenha = Math.floor(Math.random()*caracteresUsados.length);
            senhaGerada += caracteresUsados[randomizadorSenha];
        }
        for (i=0;i<tamanho;i++) {
            randomizadorSecundario = Math.floor(Math.random()*caracteresUsados.length/2);
            senhaGerada += caracteresUsados[randomizadorSecundario];
        }

    }
    return senhaGerada;
    console.log(senhaGerada(10));
} else {
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
        return senhaGerada;
    }
}


console.log(gerarSenha(10));
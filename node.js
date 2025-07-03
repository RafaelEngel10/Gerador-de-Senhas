let i = '', senhaGerada = '', randomizadorSenha = '';                                                   //variáveis a serem usadas inicializadas com nada
const caracteresUsados = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%&§?';        //constante de caracteres para criação de senha

const answer = require('readline');                                                              //variável armazenando função require('readline') que lê oque o usuário digita
const { callbackify } = require('util');
const rl = answer.createInterface ({                                                         //variável de input e output atraves da criação de interface
    input: process.stdin,
    output: process.stdout
});

function gerarSenha(tamanho) {                                                                  //função para gerar a senha conforme o parâmetro 'tamanho'
    for (i=0; i<tamanho;i++) {                                                                 //laço de repetição que percorre toda a variável caracteresUsados
        randomizadorSenha = Math.floor(Math.random()*caracteresUsados.length);               //randomizador que escolhe uma posição aleatória e determina se vai ser usada ou não
        senhaGerada = senhaGerada + caracteresUsados[randomizadorSenha];                                 //atribuição da posição usada para dentro da variável
    }
    return senhaGerada;                                                                   //retorna a variável com a senha gerada
}

rl.question("Quantos caracteres a senha deve ter? ", (input) => {                       //função question e output para fazer a pergunta, input para entrada de dados
    const tamanho = parseInt(input);                                                   //constante de tamanho atribuida a função parseInt que transforma a string em um numero
    if (!isNaN(tamanho) && tamanho>0) {       
        senhaGerada = gerarSenha(tamanho);                                            //tive que chamar a função de volta                                    
        console.log(`Sua senha gerada e: ${senhaGerada}`);                            //mostra a senha no terminal
    } else {
        console.log("Por favor, insira um numero valido maior que zero.");            //caso o usuário seja engraçadinho e bote -20 caracteres
    }
    rl.close();
});

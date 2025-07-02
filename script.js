function gerarSenha(pão) {
    const caracteresUsados = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&+-*=§¢£';
    let senhaGerada = '';
    for (let i=0; i<tamanho;i++) {
        const randomizadorSenha = Math.floor(Math.random()*caracteresUsados.length);
        senhaGerada += caracteresUsados[randomizadorSenha];
    }
    return senhaGerada;
}
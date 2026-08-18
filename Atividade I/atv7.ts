function senha (s: string): void{
    try{
        let numero = Number(s); //Conversão da string em inteiro
        //Verifica se valor é um número
        if(isNaN(numero)){
            throw new Error('Erro: O valor fornecido não é um número válido.');
        }
        console.log('Senha cadastrada');
    }catch(erro){
        console.log('Error: ', (erro as Error).message);
    }
}

//Testes
senha('123'); //Valido
senha('abc'); //Invalido
senha('1b3'); //Invalido

//PS: Number() vai verificar se todos os valores adicionados podem ser convertidos para número
//perseInte() vai verificar apenas o primeiro valor. Se 1b3, retorna como valido. Se b13, Retorna como invalido.
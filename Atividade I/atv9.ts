const entrada = require('prompt-sync')({sigint:false});

function verificarIdade(): void{
    try{
        let idade = Number(entrada('Digite a idade: '));
        if (idade < 0){
        throw new Error('Erro: A idade não pode ser negativa');
    }
    console.log(`Idade digitada: ${idade}`);
    }catch(erro){
        console.log((erro as Error).message);
    }
}
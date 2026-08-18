const entrada = require('prompt-sync')({sigint:false});

console.log('Vamos calcular a média!!');

try{
    while(true){
        const num1 = Number(entrada ('Digite o primeiro número: '));
        const num2 = Number(entrada ('Digite o segundo número: '));
        
        if(num2 === 0){
            throw new Error ('Erro: Divisão por zero não é permitida.')
        }else if (num1 > num2){
            const div = num1 / num2;
            console.log('Resultado: ' + div);
            break;
        }else{
            console.log('Valor inválido. Tente novamente'); //Loop ocorre quando o valor é inválido
        }
    }
}catch(erro){
    console.log((erro as Error).message);
}

//Try fora do loop: Para após mostrar um erro
//Try dentro do loop: Continua a receber valores mesmo após mostrar um erro
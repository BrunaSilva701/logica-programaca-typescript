// Tipos de retorno

function saudacao(name:string): string{ // : string - faz com que não aceite um tipo de retorno diferente de uma string
    return `Olá ${name}`;
    //return 5 - dá erro
}

console.log(saudacao("Maria"));

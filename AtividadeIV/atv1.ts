// generics
// aceita qualquer tipo e depois converte para uma string

function dados<T>(arg:T):string{
    return `O dado é: ${arg}`
}

console.log(dados(5));
console.log(dados("teste"));
console.log(dados(true));
console.log(dados([]));
console.log(dados(["teste"]));
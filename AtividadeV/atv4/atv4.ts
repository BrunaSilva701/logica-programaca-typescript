// alias para importações

// alias para importações

import {
    nome as nomeUsuario,
    idade as idadeUsuario,
    saudacao as dizerOla
} from "./export";

console.log(nomeUsuario);
console.log(idadeUsuario);
console.log(dizerOla());

// Outra forma
// import * as dados from "./export";

// console.log(dados.nome);
// console.log(dados.idade);
// console.log(dados.saudacao());
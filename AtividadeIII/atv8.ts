// Tuplas

// Tupla de umm tipo 
type fiveNumbers =[number,number,number,number,number ]
const myArray: fiveNumbers = [1,2,3,45,5];
// const mixArray: fiveNumbers = [1,true,string,4,5] - retorna erro

// Tupla de varios tipos
type nameAndAge = [string, number]
const usuario:nameAndAge = ["Maria", 80]
usuario[0] = "João" // Adiciona apenas pelos tipos de dados já definidos
console.log(usuario[0])
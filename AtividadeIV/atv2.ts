// Constraints com generics

function produtos<T extends {name:string}>(obj:T):string{
    return `O objeto é: ${obj.name}`
}

const obj1={name:"porta", cor:"branca"}
const obj2={name:"carro", rodas:4}
//const obj3={preco: 20, categoria:"roupas"} - dá erro pos não atende ao requisito de ter name


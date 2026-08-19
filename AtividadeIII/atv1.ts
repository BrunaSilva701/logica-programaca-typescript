// interface

interface Product {
    name:string
    price: number
    isAvaliabe: true
}

function mostrarDetalhes(product:Product){
    console.log(`O nome do produto é ${product.name} e seu preço é R${product.price}`);;
    if(product.isAvaliabe){
        console.log("O produto está dis´ponivel");
    }
}

const shirt:Product={
    name:"Camisa",
    price: 20.30,
    isAvaliabe: true
}

console.log(mostrarDetalhes(shirt));
console.log(mostrarDetalhes( {name:"Calça", price: 80.00, isAvaliabe: false}));
// extending types - heranças

interface  Humano{
    name:string
    age:number
}

interface SuperHumano extends Humano{
    superpoder:string[];
}

const humano1: SuperHumano ={
    name:"Maria",
    age:20,
    superpoder: ["Ler mentes", "Videncia"]
}

console.log(humano1);
console.log(humano1.superpoder[1])
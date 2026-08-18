// Narrowing - Operador in

class Dog {
    name
    breed

    constructor(name: string, breed?:string){
        this.name = name
        if(breed){
            this.breed = breed;

        }
    }
}

const dog1 = new Dog("Bob", "Caramelo");
const dog2 = new Dog("Banguela");

console.log(dog1);
console.log(dog2);

function detalhes(dog:Dog){
    if('breed' in dog){
        console.log(`O cachorro é da raça ${dog.breed}`)
    }else{
        console.log("O cachorro é um SRD");
    }
}

console.log(detalhes(dog1));
console.log(detalhes(dog2));
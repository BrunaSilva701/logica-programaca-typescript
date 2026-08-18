// Narrowing - instanceof

class User{
    name

    constructor(name:string){
        this.name = name;
    }
}

class SuperUser extends User{
    constructor(name:string){
        super(name);
    }
}

const pessoa1 = new User("Maria");
const pessoa2 = new SuperUser("José");

console.log(pessoa1);
console.log(pessoa2);

function pegar(user:object){
    if(user instanceof SuperUser){
        console.log(`${user.name}, Deseja ver o programa?`);
    }else if (user instanceof User){
        console.log(`Olá, ${user.name}`);
    }
}

console.log(pegar(pessoa1));
console.log(pegar(pessoa2));
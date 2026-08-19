// Interface com propriedade opicional

interface User {
    name:string,
    login?:string
}

function mostrarUsuario(user:User){
    console.log(`O nome do usuario é ${user.name}`);;
    if(user.login){
        console.log(`O login é ${user.login}`);
    }
}

const Maria:User={
    name:"Maria",
    login: "Maria_24",
}

console.log(mostrarUsuario(Maria));
console.log(mostrarUsuario( {name:"José", login: "Jose_2026"}));
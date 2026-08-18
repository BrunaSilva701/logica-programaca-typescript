// Propriedades opcionais - permitindo 2 ou 3 argumentos

function nomes(a:number, b:number, c?:number){
    console.log("A" + a);
    console.log("B" + b);
    
    if(c){
        console.log("C" + c);
    }
}

nomes(1, 2, 3);
nomes(1, 2); // erro
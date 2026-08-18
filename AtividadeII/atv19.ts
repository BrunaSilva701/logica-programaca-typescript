// Tipos de objetos

function cordenadas(cord:{x: number, y: number}){
    console.log("x cordenadas" + cord.x);
    console.log("x cordenadas" + cord.y);
}

const objetoCoord = {x:329, y:84.2};

// Pode ser:
cordenadas(objetoCoord);
const passObj:({nome: string, sobreNome:string}) = {nome: "Maria", sobreNome:"Batista"}; // Menos comum

// Não pode ser:
// cordenadas([1,2]);
// cordenadas(1,1);
// cordenadas({nome: 1, sobreNome:1});
// Tem que ser a corresppondencia do nome e do valor da propriedade
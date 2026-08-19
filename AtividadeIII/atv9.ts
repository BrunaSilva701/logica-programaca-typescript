// Tupla com readonly

function numbers(number: readonly [number, number]){
    //Adicionar
    // number[0] = 10 - da err porque não permite
    
    console.log(number[0]);
    console.log(number[1]);
}

numbers([1,2])
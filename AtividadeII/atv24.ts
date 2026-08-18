// Narrowing - Checar se valor existe

function operacao(arr:number[], operation?:string | undefined){
    if(operation){
        if(operation === "sum"){
                const sum = arr.reduce((i, total) => i + total);
                console.log(sum);
        }else if (operation == "multiplicacao"){
                const multiplicacao = arr.reduce((i, total) => i * total);
                console.log(multiplicacao);
        }
    }else{
        console.log("Por favor, defina uma operação");
    }
}

operacao([1,2,3]);
operacao([1,2,3], 'sum');
operacao([1,2,3], 'multiplicacao');
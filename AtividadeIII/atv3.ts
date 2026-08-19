// readonly

interface Car {
    marca:string
    readonly rodas: number
}

const carro1:Car={
    marca:"BMW",
    rodas: 4,
}

console.log(carro1);

// Obketo não muda a propriedade
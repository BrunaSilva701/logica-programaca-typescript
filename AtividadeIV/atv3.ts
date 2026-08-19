// interface com generics

interface objeto <T, S>{
    nome: string
    rodas: T
    color: S
}

type Car = objeto<number, string>
type Pen = objeto<boolean, string>

const carro: Car = {nome:"BMW", rodas:4, color:"branco"}
//const caneta: Pen = {nome:"bic", rodas:false} // mostra erro por não ter o color

console.log(carro);
//console.log(caneta);
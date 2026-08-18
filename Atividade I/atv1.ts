class Produto{
    nome: string;
    preco: number;

    //Construtor
    constructor (nome:string, preco: number){
        this.nome = nome;
        this.preco = preco;
    }

    //Método
    exibirDetalhes():void{
        console.log(`O produto ${this.nome} custa R$ ${this.preco}.`);
    }
}

const prod1 = new Produto ('Caneta', 2.00);
prod1.exibirDetalhes();

const prod2 = new Produto ('Boneca', 50.00);
prod2.exibirDetalhes();
class Produto{
    nome: string;
    preco: number;
    emEstoque: boolean;

    constructor(nome: string, preco: number, emEstoque:boolean){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
    }
}

class Catalogo{
    produtos: Produto[] = [];

    //Método
    adicionarProduto(produto: Produto): void{
        this.produtos.push(produto);
    }

    buscarPorNome(nome: string): Produto | undefined{
        for (let p of this.produtos){
            if (p.nome === nome){
                return p;
            }
            //return undefined;
        }
    }

    listarDisponiveis():void{
        for(let p of this.produtos){
            if(p.emEstoque){
                console.log(`Produtos em estoque: ${p.nome} - R$ ${p.preco}`);
            }
        }
    }
}

const catalogo = new Catalogo();
const p1 = new Produto('Lápis', 2.00, true);
const p2 = new Produto('Caderno', 20.00, false);
const p3 = new Produto('Tesoura', 5.00, true);

catalogo.adicionarProduto(p1);
catalogo.adicionarProduto(p2);
catalogo.adicionarProduto(p3);

//Buscar pelo nome
catalogo.buscarPorNome('lápis');

//Produtos disponiveis (true)
catalogo.listarDisponiveis();
class Livro {
    titulo: string;
    autor: string;

    constructor(titulo:string, autor:string){
        this.titulo = titulo;
        this.autor = autor;
    }
}

class Biblioteca{
    livros: Livro[] = []; //Array que recebe da classe Livro

    //Metodo
    adicionarLivro(titulo: Livro): void{
        this.livros.push(titulo); //atributo "livros" de "Biblioteca" recebe valor no array, o metodo possui variavel "titulo" que fica entre parenteses
    }

    //Método
    listarLivros():void{
        for(let i of this.livros){
            console.log(`Livro: ${i.titulo} | Autor: ${i.autor}`);
        }
    }
}

const livraria = new Biblioteca();
const l1 = new Livro ('Dom Casmurro', 'Machado de Assis');
const l2 = new Livro ('Morro dos Ventos Uivantes', 'Emily Bronte');

livraria.adicionarLivro(l1);
livraria.adicionarLivro(l2);

livraria.listarLivros();

//Class Biblioteca extends Livro{}
// const biblioteca = new Biblioteca();
// TypeScript complained that the constructor needs parameters (titulo, autor), or later that the method adicionarLivro "does not exist" when you tried to call it.

// Use herança (extends) quando uma classe é um tipo da outra.
// Exemplo: Cachorro extends Animal (um cachorro é um animal).

// Use composição quando uma classe possui outra.
// Exemplo: Biblioteca possui livros (livros: Livro[]).
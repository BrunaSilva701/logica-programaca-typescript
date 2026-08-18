class Funcionario{
    nome: string;
    salario: number;

    constructor(nome:string, salario:number){
        this.nome = nome;
        this.salario = salario;
    }
}

class Empresa{
    private funcionarios: Funcionario [] = []; 

    // Adiciona um funcionário ao quadro da empresa.
    contratar(funcionario: Funcionario):void{
        this.funcionarios.push(funcionario);
    }

    //Remove um funcionário pelo nome. Retorne `true` se o funcionário foi demitido, e `false` se não foi encontrado.
    demitir(nome:string): boolean{
        for (let n = 0; n < this.funcionarios.length; n++){
            if(this.funcionarios[n].nome === nome){ //Percorre o array buscando nome expecifico
                this.funcionarios.splice(n,1) //Remove um elemento da variavel n
                return true
            }
        }
        return false
    }

    //Calcula e retorna a média salarial de todos os funcionários. Se não houver funcionários, retorne `0`. Use um laço `for...of` para somar os salários.
    calcularMediaSalario(): number{
        if (this.funcionarios.length === 0){
            return 0
        }
        let soma = 0;
        for(let f of this.funcionarios){
            soma += f.salario;
        }
        return soma / this.funcionarios.length;
    }
}

const empresa = new Empresa();
empresa.contratar(new Funcionario("Alice", 3000));
empresa.contratar(new Funcionario("Bob", 4000));
empresa.contratar(new Funcionario("Maria", 7000));
empresa.demitir("Maria");

console.log(empresa.calcularMediaSalario());
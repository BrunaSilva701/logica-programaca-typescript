class Tarefa{
    descricao: string;
    concluida: boolean;

    constructor(descricao: string){
        this.descricao = descricao;
        this.concluida = false;
    }
}

class GerenciarTarefas{
    tarefas: Tarefa[] = [];

     //->`adicionarTarefa(descricao: string): void`**: Cria uma nova `Tarefa` com a descrição fornecida e a adiciona ao array.
    adicionarTarefas(descricao:string):void{
        //Objeto
        const t1 = new Tarefa (descricao);
        //Adiciona ao final da lista
        this.tarefas.push(t1);
    }

    concluirTarefa(descricao:string): boolean{
        for(let t of this.tarefas){
            if (t.descricao === descricao){
                t.concluida = true;
                return true;
            }
        }
        return false;
    }

    listarTarefas():void{
        for (let t of this.tarefas) {
            console.log(`Descrição: ${t.descricao} | Status: ${t.concluida? 'Concluida' : 'Pendente'}`);
        }
    }
}

const tarefas = new GerenciarTarefas ();

tarefas.adicionarTarefas('Tarefa de matemática');
tarefas.adicionarTarefas('Fazer questões de fisica');
tarefas.concluirTarefa('Tarefa de matemática');
tarefas.listarTarefas();
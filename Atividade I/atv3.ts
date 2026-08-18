class ContaBancaria{
    saldo: number;
    numConta: string;

    constructor(numConta:string){
        this.saldo = 0;
        this.numConta = numConta;
    }

    //Metodo que adiciona valor ao saldo
    depositar(valor: number):void{
        this.saldo += valor;
    }

    //Método que subtrai o valor do saldo, mas somente se houver saldo suficiente
    sacar(valor: number):void{
        if (valor > 0 && valor <= this.saldo){ //Se colocar apenas valor > 0, o else não é execultado e o retorno é -(valor que deseja sacar). EX:entrada: conta1.sacar(100), saida: -100
            this.saldo -= valor;
        }else{
            console.log('Saldo insuficiente');
        }
    }

    //Método que imprime o saldo atual
    consultarSaldo():void{
        console.log(`O saldo atual é: ${this.saldo}`);
    }
}

//Instancia ContaBancaria
const conta1 = new ContaBancaria ('2341683');

//Deposito
conta1.depositar(0);

//Saque
conta1.sacar(100);

//Consultar o saldo
conta1.consultarSaldo();
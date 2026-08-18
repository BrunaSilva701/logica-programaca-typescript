// Para ser usada como exceção ela vai herdar de Error
class SaldoInsuficienteError extends Error{
    constructor(){
        super("Saldo insuficiente");
        this.name = "SaldoInsuficienteError";
    }
}

class Conta{
    private saldo: number;

    constructor(saldoInicial: number){
        if(saldoInicial < 0){
            throw new Error("Saldo inicial não pode serr negativo");
        }
        this.saldo=saldoInicial;
    }

    //Método
    sacar(valor:number):void{
        if(valor <=0){
            throw new Error("Valor de saque invalido");
        }
        if(valor > this.saldo){
            throw new SaldoInsuficienteError();
        }
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso`);
    }

    getSaldo():number{
        return this.saldo;
    }
}

//Bloco try-catch
try{
    const conta = new Conta(500);
    conta.sacar(600);
}catch(erro){
    if(erro instanceof SaldoInsuficienteError){
        console.log("Atenção: Saldo insuficiente");
    }else if(erro instanceof Error){
        console.log("Erro inesperado", erro.message);
    }
}
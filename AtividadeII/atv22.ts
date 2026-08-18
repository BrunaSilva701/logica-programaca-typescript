// Union type - Aceita multiplos tipos de dados

function mostrarSaldo(saldo: string | number): void {
    if (typeof saldo === "string") {
        console.log(`Saldo: R$ ${parseFloat(saldo).toFixed(2)}`);
    } else {
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
    }
}

mostrarSaldo(1500);
mostrarSaldo("2500.50");


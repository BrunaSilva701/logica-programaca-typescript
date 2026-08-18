function abrirRecurso(){
    console.log('Recurso aberto');
}

function fecharRecurso(){
    console.log('Recurso fechado');
}

try {
    abrirRecurso();
    throw new Error ('Falha na Operação');
} catch (error) {
    console.log('Erro: ', (error as Error).message);
}finally{
    fecharRecurso();
}
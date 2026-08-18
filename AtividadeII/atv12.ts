// Variável que recebe um número.
const numero = 25;

// Converte o número para string em outra variável.
// A variável é tipada por inferência: como String(numero) retorna texto,
// o TypeScript entende automaticamente que numeroComoTexto é do tipo string.
const numeroComoTexto = String(numero);

// Para converter uma variável para number, use Number(variavel).
// Exemplo: const texto = "42"; const textoComoNumero = Number(texto);

// Imprime o número dentro de uma string maior usando template string.
console.log(`O número informado é ${numeroComoTexto}.`);

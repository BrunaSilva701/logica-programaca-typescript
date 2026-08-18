# TYPESCRIPT
## Atividade 1: Classe `Produto`
1.  Crie uma classe chamada `Produto` com os atributos **`nome`** e **`preco`**.
2.  No construtor, receba esses valores e atribua-os usando **`this`**.
3.  Crie um método chamado **`exibirDetalhes()`** que imprime a seguinte frase: "O produto NOME custa R$ PRECO.".
4.  Crie duas instâncias com **`new`** e chame o método **`exibirDetalhes()`** para cada uma.
5.  **Dica**: Anote nos comentários do código onde aparecem `new`, `constructor` e `this`, explicando o papel de cada um.


## Atividade 2: Classes `Livro` e `Biblioteca`
1.  Crie a classe **`Livro`** com os atributos **`titulo`** (string) e **`autor`** (string).
2.  Crie a classe **`Biblioteca`**. No seu construtor, inicie um array **`livros`** vazio.
3.  Crie um método **`adicionarLivro(livro)`** na classe **`Biblioteca`** que recebe uma instância de `Livro` e a adiciona ao array `livros`.
4.  Crie um método **`listarLivros()`** que imprime o título e o autor de cada livro no array.
5.  Crie uma instância de `Biblioteca`. Depois, crie duas instâncias de `Livro` e adicione-as à biblioteca. Por fim, chame o método `listarLivros()` para ver o resultado.
6.  **Dica**: Explique com comentários cada uso de **`this`** e a função de **`new`** ao criar as instâncias.


## Atividade Prática 3: Classe `ContaBancaria`
1.  Crie uma classe chamada **`ContaBancaria`** com os atributos **`saldo`** (number) e **`numeroConta`** (string).
2.  No construtor, receba apenas o **`numeroConta`** e inicie o **`saldo`** com o valor **`0`**.
3.  Crie o método **`depositar(valor)`** que adiciona o valor ao saldo.
4.  Crie o método **`sacar(valor)`** que subtrai o valor do saldo, mas somente se houver saldo suficiente.
5.  Crie um método **`consultarSaldo()`** que imprime o saldo atual.
6.  Crie uma instância de `ContaBancaria` com `new`. Faça um depósito, depois um saque e, por fim, consulte o saldo para verificar o resultado.


## Atividade 4: Sistema de Gerenciamento de Tarefas
Crie uma classe `Tarefa` e uma classe `GerenciadorDeTarefas`.
1. Classe `Tarefa:
- Deve ter os atributos **`descricao`** (string) e **`concluida`** (boolean).
- O construtor deve inicializar a `descricao` e definir `concluida` como `false` por padrão.

2. Classe `GerenciadorDeTarefas`:
- Deve ter um array privado **`tarefas`** que armazena objetos do tipo `Tarefa`.
-  Implemente os seguintes métodos:
      * `adicionarTarefa(descricao: string): void`**: Cria uma nova `Tarefa` com a descrição fornecida e a adiciona ao array.

      * `concluirTarefa(descricao: string): boolean`**: Encontra a tarefa pela descrição e muda o atributo `concluida` para `true`. Retorne `true` se a tarefa foi encontrada e concluída, e `false` caso contrário.

      * listarTarefas(): void`**: Exibe todas as tarefas no console, mostrando a descrição e o status (se está concluída ou pendente).



## Atividade 5: Catálogo de Produtos
Crie uma classe `Produto` e uma classe `Catalogo`.
1.Classe `Produto`:
- Deve ter os atributos **`nome`** (string), **`preco`** (number) e **`emEstoque`** (boolean).
- O construtor deve inicializar todos os atributos.

2. Classe `Catalogo`:
- Deve ter um array privado **`produtos`** que armazena objetos do tipo `Produto`.
- Implemente os seguintes métodos:
    * `adicionarProduto(produto: Produto): void`**: Adiciona um produto ao catálogo.

    * `buscarPorNome(nome: string): Produto | undefined`**: Encontra e retorna um produto pelo nome. Use o método `find()` do array.

    * `listarDisponiveis(): void`**: Exibe no console apenas os produtos que estão com `emEstoque` igual a `true`.


## Atividade 6: Gerenciamento de Funcionários
Crie uma classe `Funcionario` e uma classe `Empresa`.
1.Classe `Funcionario`:
- Deve ter os atributos **`nome`** (string) e **`salario`** (number).
- O construtor deve inicializar os atributos.

2. Classe `Empresa`:
- Deve ter um array privado **`funcionarios`** que armazena objetos do tipo `Funcionario`.
- Implemente os seguintes métodos:
   * `contratar(funcionario: Funcionario): void`**: Adiciona um funcionário ao quadro da empresa.

   * `demitir(nome: string): boolean`**: Remove um funcionário pelo nome. Retorne `true` se o funcionário foi demitido, e `false` se não foi encontrado.

   * `calcularMediaSalarial(): number`**: Calcula e retorna a média salarial de todos os funcionários. Se não houver funcionários, retorne `0`. Use um laço `for...of` para somar os salários.


# TRY/CATCH-TYPESCRIPT
## Atividade 7: Conversão Segura
Crie uma função que receba uma *string* como argumento e tente convertê-la para um número inteiro. Utilize um bloco `try-catch` para garantir que:
1.  O código que tenta a conversão esteja dentro do bloco `try`.
2.  Se a conversão falhar (por exemplo, se a *string* for "abc"), o erro seja capturado e uma mensagem amigável seja exibida (por exemplo, "Erro: O valor fornecido não é um número válido.").


## Atividade 8: Divisão por Zero
1. Escreva um programa que solicite ao usuário dois números. 
2. Calcule a divisão do primeiro pelo segundo. 
3. Implemente o tratamento de exceções para capturar o erro que ocorre se o usuário tentar dividir por zero, exibindo uma mensagem específica como "Erro: Divisão por zero não é permitida."


## Atividade 9: Verificação de Idade
Crie uma função chamada `verificarIdade(idade)` que receba um número inteiro.
1. Se a `idade` for negativa, a função deve lançar (usar `throw`) uma nova exceção com a mensagem "A idade não pode ser negativa.".
2. Use um bloco `try-catch` para chamar esta função com um valor negativo e exibir a mensagem de erro da exceção capturada.

-> Utilização de `finally` e Exceções Personalizadas (Com base no Exemplo Bancário)

## Atividade 10: Garantindo o Fechamento de Recursos
Simule uma conexão com um arquivo ou banco de dados através de uma função chamada `abrirRecurso()` e outra chamada `fecharRecurso()`.
Escreva um bloco de código que:
1.  Dentro do `try`, chame `abrirRecurso()` e depois simule uma operação que **lança um erro** (e.g., `throw new Error("Falha na Operação.");`).

2.  Utilize o bloco `finally` para **sempre** chamar `fecharRecurso()`, garantindo que o recurso seja liberado, independentemente de ter ocorrido um erro na operação.


## Atividade 11: Saque na Conta Bancária (Exceção Específica)
1.  Crie uma classe simples de exceção, por exemplo, `SaldoInsuficienteError`.

2.  Modifique o método `sacar` da classe `Conta` para que, se houver saldo insuficiente, ele lance (`throw`) um novo objeto `SaldoInsuficienteError` em vez de um `new Error()`.

3.  Crie um bloco `try-catch` que:
      * Tente realizar um saque que cause a exceção de saldo insuficiente.
      * Utilize uma cláusula `catch` para especificamente capturar o `SaldoInsuficienteError` e exibir a mensagem "ATENÇÃO: Não foi possível realizar o saque por saldo insuficiente."
      * Caso um outro erro não esperado ocorra, capture-o com um `catch` genérico, exibindo "Erro inesperado: [mensagem do erro]".
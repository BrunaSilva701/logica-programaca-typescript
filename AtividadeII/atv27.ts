// Funcão que recebe review dos usuarios
// Usar narrowing para receber dados
// Possibilidades: Boolean number
// enviar numeros de 1 a 5 estrelas, com mensagem para cada nota
// false = quando o usuario não deixa review, com mensagem de retorno 

function receberReview(review: boolean | number): string {
  if (review === false) {
    return "Você não deixou uma avaliação.";
  }

  switch (review) {
    case 1:
      return "1 estrela: sentimos muito que sua experiência não tenha sido boa.";
    case 2:
      return "2 estrelas: obrigado pelo feedback; vamos buscar melhorar.";
    case 3:
      return "3 estrelas: obrigado pela sua avaliação!";
    case 4:
      return "4 estrelas: ficamos felizes que você tenha gostado!";
    case 5:
      return "5 estrelas: muito obrigado pela excelente avaliação!";
    default:
      return "A avaliação deve ser uma nota de 1 a 5 estrelas.";
  }
}

console.log(receberReview(false));
console.log(receberReview(5));

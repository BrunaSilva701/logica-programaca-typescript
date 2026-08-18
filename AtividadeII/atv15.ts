// Any - aceita valores de qualquer tipo

const arr : any = [1,"teste", true,[],{nome:"Maria"}];
console.log(arr);

arr.push([1,2,3]);
console.log(arr);

// Para aceitar mais de um tipo de forma controlada, use união:
// const dados: (string | number)[] = ["Ana", 25, "Bruno", 30];
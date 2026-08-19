// Condicional expressions type

interface A {}

interface B extends A {}

interface Test {
  showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5
// const someVar2: myType = "teste"

type myTypeB = Test extends { showName(): string } ? string : boolean

type myTypeC = Test extends { showNumber(): number } ? string : boolean
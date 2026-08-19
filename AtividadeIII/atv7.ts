// ReadOnlyArray

let arr: ReadonlyArray<string> = ["maçao", "laranja","banana"];

console.log(arr);

arr.forEach((item) => {
    console.log("Fruta: " + item)
})

arr = arr.map((item) => {
    return `Fruta: ${item}`
})

console.log(arr);
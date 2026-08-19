// index signature

interface CoodObjeto {
    [index:string]:number
}

let coords:CoodObjeto ={
    x:10
}

coords.y = 15
console.log(coords);
// coords.z="teste"; - da erro
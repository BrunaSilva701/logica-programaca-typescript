// intersection type

interface Character{
    name:string
}

interface Gun{
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold : HumanWithGun ={
    name: "Arnold",
    type: "Martelo",
    caliber:12,
}

console.log(arnold)
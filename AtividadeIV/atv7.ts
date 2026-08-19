// indexed access type

type Truck = {km: number, kg:number, description:string}

type km = Truck['km']

const newTruck : Truck ={
    km: 1000,
    kg: 500,
    description: "Caminhão"
}

function showKm(km:km){
    console.log(`Tem ${km}`);
}


showKm(newTruck.km)

const newCar = {
    km: 400000,
    kg: 10000
}

showKm(newCar.km);
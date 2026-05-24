const Chai={
    name: "masala chai",
    price: 100,
    isAvailable: true
}

let Tea:{
    name: string,
    price: number,
    isAvailable: boolean
}

Tea={
    name: "masala chai",
    price: 100,
    isAvailable: true
}

type Tea ={
    name: string,
    price: number,
    ingredients: string[]

}

const gingerTea:Tea={
    name: "ginger tea",
    price: 100,
    ingredients: ["ginger", "tea"]
}

type Cup = {size: string}
let smallcup: Cup ={size: "small"}

let bigcup = {size: "big", material: "plastic"}
smallcup = bigcup

type brew ={brewtime: number}
const coffee = {brewtime: 3, beans:"arabica"}
const chai: brew = coffee

type User ={
    username: string,
    password: string
}

const adminUser:User={
    username: "admin",
    password: "password123"
}

type Item = {name: string, price: number}
type Address = {street: string, city: string}

type Order ={
    id:string,
    items: Item[],
    address: Address
}

type Chai={
    name: string,
    price: number,
    isAvailable: boolean
}

const updateChai = (updates:Partial<Chai>)=>{
    console.log(updates);
}

updateChai({isAvailable: true})
updateChai({price: 100})
updateChai({})

type ChaiOrder={
    name?: string,
    quantity?: number
}

const placeOrder = (order:Required<ChaiOrder>)=>{
    console.log(order);
}

placeOrder({name: "chai", quantity: 2})

type chai={
    name: string;
    price: number;
    isAvailable: boolean;
    ingredients?: string[]
}

type BasicChai = Pick<chai, "name" | "price" >

const basicChai: BasicChai = {
    name: "chai",
    price: 100
}

type newchai ={
    name: string;
    price: number;
    isAvailable: boolean;
    ingredients?: string[]
}

type publicChai = Omit<newchai, "ingredients" | "isAvailable" |"price">

const publicChai: publicChai = {
    name: "chai",
    //price: 100
}
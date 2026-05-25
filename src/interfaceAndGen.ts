interface chai {
    flavor: string,
    price: number
    milk?: boolean
}

const chai1: chai = {
    flavor: "cardamom",
    price: 20
}

interface shop{
    readonly id:number
    name: string
    
}
const s:shop = {
    id: 1,
    name: "chai shop"
}
///s.id=2//error

interface DiscountCalucator{
    (price: number, discount: number): number
}

const calculateDiscount: DiscountCalucator = (price, discount) => price * (1 - discount);

interface TeaMachine{
    start: () => void
    stop: () => void
}

const teaMachine: TeaMachine = {
    start: () => console.log("start"),
    stop: () => console.log("stop")
}

interface ChaRait{
    [flavour:string]:number
}

const chaiRait: ChaRait = {
    "cardamom": 20
}

interface user{
    name:string
}
interface user{
    age:number
}

const u:user = {
    name:"abc",
    age:20
}

interface A{a:string}
interface B{b:string}
interface C extends A,B{}


//Generic

function wrapinarray<T>(item:T):T[]{
    return [item]
}

wrapinarray("abc");
wrapinarray(1);
wrapinarray({flavour:"abc"});

function pair<T,U>(a:T,b:U):[T,U]{
    return [a,b]
}

pair("abc","abc");
pair(1,1);
pair({flavour:"abc"},{flavour:"abc"})
pair(1,{flavour:"abc"})
pair({flavour:"abc"},1)

interface box<T>{
    contents:T
}

const b:box<string> = {
    contents:"abc"
}

const b1:box<number> = {
    contents:1
}

const b2:box<{flavour:string}> = {
    contents:{flavour:"abc"}
}
const b3:box<string | number> = {contents:"abc"}//union type>
//const b4:box<string> = {contents:1}//error

interface ApiResponse<T>{
    status:number
    data:T
}

const apiResponse:ApiResponse<string> = {
    status:200,
    data:"abc"
}

const apiResponse2:ApiResponse<{flavour:string}> = {
    status:200,
    data:{flavour:"abc"}
}
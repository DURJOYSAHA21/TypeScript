// function makeChai(order: {type: string; sugar: number; strong: boolean})//accepts an object called order and must have a type property of type string 
// {
//     console.log(order);
// }

// function serveOrder(order: {type: string; sugar: number; strong: boolean})//accepts an object called order and must have a type property of type string 
// {
//     console.log(order);
// }

type ChaiOrder = {type: string; sugar: number; strong: boolean};

function makeChai(order: ChaiOrder)//accepts an object called order and must have a type property of type string 
{
    console.log(order);
}

function serveOrder(order: ChaiOrder)//accepts an object called order and must have a type property of type string 
{
    console.log(order);
}

interface TeaRecipe 
{
    water:number;
    milk:number;
}

class MasalaChai implements TeaRecipe
{
    water=200;
    milk=5;
}


interface CupSize
{
    size: "small" | "medium";
}
class TeaCup implements CupSize
{
    size:'small'|'medium'= "small";
}

type TeaType = "masala" | "cardamom";
function OrderChai(t:TeaType)
{
    console.log(t);
}

type BaseChai ={teaLeaves: number};
type Extra ={masala: number};

type masalachai = BaseChai & Extra;

const cup: masalachai = {teaLeaves: 10, masala: 5};

type User={
    username: string;
    bio?: string;
}

const user1:User={
    username:"abc"
}
const user2:User={
    username:"abc",
    bio:"abc"
}

type Config={
    readonly dbUrl: string;
    port: number;
}

const serverConfig:Config={
    dbUrl:"mongodb://localhost:27017",
    port:8080
}

//serverConfig.dbUrl="mongodb://localhost:27017";
//readonly only can be set once


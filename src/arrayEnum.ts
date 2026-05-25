const chaiFlavor: string [] = ["cardamom", "masala", "peppermint", "vanilla"];
const chaiPrice: number [] = [20, 30, 40, 50];

const raiting: Array<number> = [1, 2, 3, 4, 5];

type chai={
    flavor: string;
    price: number;
}

const menu: chai[] =[
    {flavor: "cardamom", price: 20},
    {flavor: "masala", price: 30},
    {flavor: "peppermint", price: 40},
    {flavor: "vanilla", price: 50},
]

const cities:readonly string[] = ["mumbai", "delhi", "bangalore"];
//cities.push("chennai");

const table: number[][] =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const table1: Array<Array<number>> =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let chaiTupple: [string, number, boolean];
chaiTupple = ["cardamom", 20, true];
//chaiTupple = ["cardamom", 20, true, true];    //error

let userInfo: [string,number,boolean?];
userInfo = ["cardamom", 20];
userInfo = ["cardamom", 20, true];

const locatuion: [number, number] = [12.34, 56.78];

const chaiItems: [name:string, price:number] =["cardamom", 20];

enum ChaiFlavor{
    Cardamom = "cardamom",
    Masala = "masala",
    Peppermint = "peppermint",
    Vanilla = "vanilla"
}

const flavor = ChaiFlavor.Masala;

enum status{
    Pending=100,
    Success, //101
    Fail //102
}

enum chaiType{
    Masala = "masala",
    Cardamom = "cardamom"
}

function makechai(type:chaiType){
    console.log(`making ${type} chai`);
}

makechai(chaiType.Masala);
//makechai("massala");//error


enum Randomenum{
    ID=1,
    NAME ="chai"
}

const enum Sugar {
    Light = 1,
    Medium = 2,
    Heavy = 3
}

const s =Sugar.Medium;

let t:[string, number] = ["cardamom", 20];
t.push ("cardamoms");
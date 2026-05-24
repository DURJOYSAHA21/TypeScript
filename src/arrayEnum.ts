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
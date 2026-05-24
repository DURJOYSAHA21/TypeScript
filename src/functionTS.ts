function makeChai(type: string,cups:number){
    console.log(`making ${cups} cups of ${type} chai`);
}

makeChai("masala",2);

function getChaiPrice(cups: number): number{
    return cups * 5;
}

function makeOrder(order:string){
    if(!order){
        return null;
    }
    return order;
}

function logChai():void {
    console.log("making chai");
}

function createChai(order: {
    type:string;
    sugar: number;
    strong: boolean;
    cup: "small" | "big";

}){
    console.log(order);
}
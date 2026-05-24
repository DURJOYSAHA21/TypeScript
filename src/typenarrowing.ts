function getchai(kind: string | number)
{
    if(typeof kind === "string")
    {
        return "making ${kind} chai";
    }
    else
    {
        return "chai order: ${kind}" ;
    }
}

function serverChai(msg?: string)
{
    if(msg)
    {
        console.log(msg);
    }
    return "chai";
}

function orderChai(size: "small" | "medium" | "large" | number)
{
    if(size === "small")
    {
        return 1;
    }
    if(size === "medium")
    {
        return 2;
    }
    if(size === "large")
    {
        return 3;
    }
    return size;


}

class kulhadChai{
    serve(){
        return "kulhad chai";

    }
}

class cuttingChai{
    serve(){
        return "cutting chai";
    }
}

function serve(chai: kulhadChai | cuttingChai){
    if(chai instanceof kulhadChai)
    {
        return chai.serve();
    }
    if(chai instanceof cuttingChai)
    {
        return chai.serve();
    }
}



type chaiOrder =
{
    type:string;
    sugar: number;
}

function isChaiOrder(obj:any):obj is chaiOrder
{
    return(
        typeof obj ==="object" && obj!==null &&
        typeof obj.type ==="string" && typeof obj.sugar ==="number"

    )
}

function serveOrder(item:chaiOrder | string)
{
   if(isChaiOrder(item))
   {
       return "serving ${item.type} chai with ${item.sugar} sugar";
   }
   return "serving chai ${item}";
}

type MassalaChai ={
    type: "masala";
    spicelevel: number;
}
type CardamomChai={
    type: "cardamom";
    cardamomlevel: number;
}

type Chai = MassalaChai | CardamomChai;
function MakeChai(order:Chai){
    switch(order.type)
    {
        case "masala":
            return `making ${order.type} chai with ${order.spicelevel} spice`;
            break;
        case "cardamom":
            return `making ${order.type} chai with ${order.cardamomlevel} cardamom`;
            break;
    }
}

function brew(order: MassalaChai | CardamomChai){
   if("spicelevel" in order)
   {
       return `brewing ${order.type} chai with ${order.spicelevel} spice`;
   }
   if("cardamomlevel" in order)
   {
       return `brewing ${order.type} chai with ${order.cardamomlevel} cardamom`;
   }

}

function isStringArray(arr: unknown):arr is string[]{
    return (
        Array.isArray(arr) && arr.every(item => typeof item === "string")
    )

}
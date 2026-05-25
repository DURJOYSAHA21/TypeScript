// class chai {
//     flavor:string;
//     price:number;

//     // constructor(flavor:string, price:number) {
//     //     this.flavor = flavor;
//     //     this.price = price;
//     // }
//     constructor(flavor:string) {
//         this.flavor = flavor;
//         console.log(this);
//     }
// }

// const masalaChai = new chai("masala");
// masalaChai.flavor = "masala";
// masalaChai.price = 100;

class chai{
    public flavor:string = "masala";
    private secret ="lemon"

    reveal()
    {
        return this.secret
    }

}

class shop{
    protected shopname="chai shop";
}
class Branch extends shop{
  getShopName()
  {
      return this.shopname;
  }
}

class Wallet{
    #balance = 0;

    getBalance()
    {
        return this.#balance;
    }
}

const w = new Wallet();

const masalaChai = new chai();
console.log(masalaChai.reveal());

class cup{
    readonly size:number = 250;
    constructor(size:number){
        this.size = size
    }
   
}
class mordernchai {
    private _sugar =2;

    get sugar(){
        return this._sugar;
    }

    set sugar(value:number){
        if(value>5){
            throw new Error("too much sugar");
        }
        this._sugar = value;
    }
}

const c = new mordernchai();
c.sugar = 6;

class EkChai {
    static shopName="chai shop";
    constructor(public flavor:string, public price:number){

    }

}
console.log(EkChai.shopName);

abstract class Drink{
    abstract make(): void
}

class CHAI extends Drink{
    make(){
        console.log("making masala chai");
    }
}

class heater
{
    heat(){}
}

class ChaiMaker{
    constructor(public heater:heater){}
    make(){
        this.heater.heat();
    }
}


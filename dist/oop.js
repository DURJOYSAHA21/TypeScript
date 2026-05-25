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
class chai {
    flavor = "masala";
    secret = "lemon";
    reveal() {
        return this.secret;
    }
}
class shop {
    shopname = "chai shop";
}
class Branch extends shop {
    getShopName() {
        return this.shopname;
    }
}
class Wallet {
    #balance = 0;
    getBalance() {
        return this.#balance;
    }
}
const w = new Wallet();
const masalaChai = new chai();
console.log(masalaChai.reveal());
class cup {
    size = 250;
    constructor(size) {
        this.size = size;
    }
}
class mordernchai {
    _sugar = 2;
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        if (value > 5) {
            throw new Error("too much sugar");
        }
        this._sugar = value;
    }
}
const c = new mordernchai();
c.sugar = 6;
class EkChai {
    flavor;
    price;
    static shopName = "chai shop";
    constructor(flavor, price) {
        this.flavor = flavor;
        this.price = price;
    }
}
console.log(EkChai.shopName);
class Drink {
}
class CHAI extends Drink {
    make() {
        console.log("making masala chai");
    }
}
class heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat();
    }
}
export {};
//# sourceMappingURL=oop.js.map
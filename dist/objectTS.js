const Chai = {
    name: "masala chai",
    price: 100,
    isAvailable: true
};
let Tea;
Tea = {
    name: "masala chai",
    price: 100,
    isAvailable: true
};
const gingerTea = {
    name: "ginger tea",
    price: 100,
    ingredients: ["ginger", "tea"]
};
let smallcup = { size: "small" };
let bigcup = { size: "big", material: "plastic" };
smallcup = bigcup;
const coffee = { brewtime: 3, beans: "arabica" };
const chai = coffee;
const adminUser = {
    username: "admin",
    password: "password123"
};
const updateChai = (updates) => {
    console.log(updates);
};
updateChai({ isAvailable: true });
updateChai({ price: 100 });
updateChai({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({ name: "chai", quantity: 2 });
const basicChai = {
    name: "chai",
    price: 100
};
const publicChai = {
    name: "chai",
    //price: 100
};
export {};
//# sourceMappingURL=objectTS.js.map
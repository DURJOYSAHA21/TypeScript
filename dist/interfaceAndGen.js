const chai1 = {
    flavor: "cardamom",
    price: 20
};
const s = {
    id: 1,
    name: "chai shop"
};
const calculateDiscount = (price, discount) => price * (1 - discount);
const teaMachine = {
    start: () => console.log("start"),
    stop: () => console.log("stop")
};
const chaiRait = {
    "cardamom": 20
};
const u = {
    name: "abc",
    age: 20
};
//Generic
function wrapinarray(item) {
    return [item];
}
wrapinarray("abc");
wrapinarray(1);
wrapinarray({ flavour: "abc" });
function pair(a, b) {
    return [a, b];
}
pair("abc", "abc");
pair(1, 1);
pair({ flavour: "abc" }, { flavour: "abc" });
pair(1, { flavour: "abc" });
pair({ flavour: "abc" }, 1);
const b = {
    contents: "abc"
};
const b1 = {
    contents: 1
};
const b2 = {
    contents: { flavour: "abc" }
};
const b3 = { contents: "abc" }; //union type>
const apiResponse = {
    status: 200,
    data: "abc"
};
const apiResponse2 = {
    status: 200,
    data: { flavour: "abc" }
};
export {};
//# sourceMappingURL=interfaceAndGen.js.map
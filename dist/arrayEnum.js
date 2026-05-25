const chaiFlavor = ["cardamom", "masala", "peppermint", "vanilla"];
const chaiPrice = [20, 30, 40, 50];
const raiting = [1, 2, 3, 4, 5];
const menu = [
    { flavor: "cardamom", price: 20 },
    { flavor: "masala", price: 30 },
    { flavor: "peppermint", price: 40 },
    { flavor: "vanilla", price: 50 },
];
const cities = ["mumbai", "delhi", "bangalore"];
//cities.push("chennai");
const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const table1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let chaiTupple;
chaiTupple = ["cardamom", 20, true];
//chaiTupple = ["cardamom", 20, true, true];    //error
let userInfo;
userInfo = ["cardamom", 20];
userInfo = ["cardamom", 20, true];
const locatuion = [12.34, 56.78];
const chaiItems = ["cardamom", 20];
var ChaiFlavor;
(function (ChaiFlavor) {
    ChaiFlavor["Cardamom"] = "cardamom";
    ChaiFlavor["Masala"] = "masala";
    ChaiFlavor["Peppermint"] = "peppermint";
    ChaiFlavor["Vanilla"] = "vanilla";
})(ChaiFlavor || (ChaiFlavor = {}));
const flavor = ChaiFlavor.Masala;
var status;
(function (status) {
    status[status["Pending"] = 100] = "Pending";
    status[status["Success"] = 101] = "Success";
    status[status["Fail"] = 102] = "Fail"; //102
})(status || (status = {}));
var chaiType;
(function (chaiType) {
    chaiType["Masala"] = "masala";
    chaiType["Cardamom"] = "cardamom";
})(chaiType || (chaiType = {}));
function makechai(type) {
    console.log(`making ${type} chai`);
}
makechai(chaiType.Masala);
//makechai("massala");//error
var Randomenum;
(function (Randomenum) {
    Randomenum[Randomenum["ID"] = 1] = "ID";
    Randomenum["NAME"] = "chai";
})(Randomenum || (Randomenum = {}));
var Sugar;
(function (Sugar) {
    Sugar[Sugar["Light"] = 1] = "Light";
    Sugar[Sugar["Medium"] = 2] = "Medium";
    Sugar[Sugar["Heavy"] = 3] = "Heavy";
})(Sugar || (Sugar = {}));
const s = Sugar.Medium;
let t = ["cardamom", 20];
t.push("cardamoms");
export {};
//# sourceMappingURL=arrayEnum.js.map
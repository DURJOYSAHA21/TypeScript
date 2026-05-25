function getchai(kind) {
    if (typeof kind === "string") {
        return "making ${kind} chai";
    }
    else {
        return "chai order: ${kind}";
    }
}
function serverChai(msg) {
    if (msg) {
        console.log(msg);
    }
    return "chai";
}
function orderChai(size) {
    if (size === "small") {
        return 1;
    }
    if (size === "medium") {
        return 2;
    }
    if (size === "large") {
        return 3;
    }
    return size;
}
class kulhadChai {
    serve() {
        return "kulhad chai";
    }
}
class cuttingChai {
    serve() {
        return "cutting chai";
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
    if (chai instanceof cuttingChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" && obj !== null &&
        typeof obj.type === "string" && typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return "serving ${item.type} chai with ${item.sugar} sugar";
    }
    return "serving chai ${item}";
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return `making ${order.type} chai with ${order.spicelevel} spice`;
            break;
        case "cardamom":
            return `making ${order.type} chai with ${order.cardamomlevel} cardamom`;
            break;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        return `brewing ${order.type} chai with ${order.spicelevel} spice`;
    }
    if ("cardamomlevel" in order) {
        return `brewing ${order.type} chai with ${order.cardamomlevel} cardamom`;
    }
}
function isStringArray(arr) {
    return (Array.isArray(arr) && arr.every(item => typeof item === "string"));
}
export {};
//# sourceMappingURL=typenarrowing.js.map
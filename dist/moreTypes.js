let response = "43";
let numericLength = response.length;
let bookString = '{"name":"the name of the wind"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject);
const inputElement = document.getElementById("input");
let value;
value = "chai";
value = 2.5;
value = [1, 2, 3, 4];
value.toUpperCase();
let newvalue;
newvalue = "chai";
newvalue = 2.5;
newvalue = [1, 2, 3, 4];
//newvalue.toUpperCase(); // error
if (typeof newvalue === "string") {
    newvalue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log(error);
}
const data = "hello";
const str = data;
function redirectBasedOnRole(role) {
    if (role === "admin") {
        console.log("redirecting to admin dashboard");
    }
    if (role === "user") {
        console.log("redirecting to user dashboard");
    }
    if (role === "super-admin") {
        console.log("redirecting to super admin dashboard");
    }
    role;
}
function neverReturns() {
    while (true) {
    }
}
export {};
//# sourceMappingURL=moreTypes.js.map
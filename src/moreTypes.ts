let response: any ="43";

let numericLength:number = (response as string).length;

type Book ={
    name: string;
};

let bookString = '{"name":"the name of the wind"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElement =document.getElementById("input") as HTMLInputElement;

let value:any

value="chai";
value=2.5;
value = [1,2,3,4];
value.toUpperCase();

let newvalue:unknown

newvalue="chai";
newvalue=2.5;
newvalue = [1,2,3,4];
//newvalue.toUpperCase(); // error
if(typeof newvalue === "string")
{
    newvalue.toUpperCase();
}

try
{

   
}
catch(error)
{
    if(error instanceof Error)
    {
        console.log(error.message);
    }
    console.log(error);
}

const data:unknown = "hello";
const str:string = data as string;

type Role = "admin" | "user" | "super-admin" | "guest";

function redirectBasedOnRole(role:Role): void
{
   if(role === "admin")
   {
       console.log("redirecting to admin dashboard");
   }
   if(role === "user")
   {
       console.log("redirecting to user dashboard");
   }
   if(role === "super-admin")
   {
       console.log("redirecting to super admin dashboard");
   }
   role;
}

function neverReturns():never
{
    while(true)
    {
       
    }
}



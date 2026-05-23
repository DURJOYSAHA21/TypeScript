//union

let subs: number | string;
subs = 100;
subs = "100";

let apiRequestStatus: "success" | "fail" | "pending";
apiRequestStatus = "pending";
apiRequestStatus = "success";
//apiRequestStatus = "uioi";

const orders = ['12', '20', '30', '40'];
let currentorder: string | undefined;

for(let order of orders)
{
    if(order === '20')
    {
        currentorder = order;
    }
}
console.log(currentorder);
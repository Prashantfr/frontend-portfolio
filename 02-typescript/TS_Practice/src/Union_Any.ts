// a variable that can be either a number OR a string
let subcount: number | string = 10;
subcount = "1 million"; //both are valid

//restricting exact custom states (literal types)
let apiStatus: "pending" | "success" | "error" = "pending";
apiStatus = "success";
// if we write apiStatus = "done" it will show error

//any
const orders = ['12','24','28','42'];

let currentorder: string |undefined ; //used undefined to avoid the any

for(let order of orders){
    if(order==='28') {
        currentorder = order;
        break;
    }
    currentorder = '11';
}

console.log(currentorder);
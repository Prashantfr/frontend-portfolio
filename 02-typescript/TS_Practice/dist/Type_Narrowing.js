"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//narrowing using the typeof (for primitives)
function processOrder(kind) {
    if (typeof kind === "string") { //inside this block , TS knows kind is 100% a string
        console.log(kind.toUpperCase());
    }
    else { //inside this block , the TS knows kind is safely a number
        console.log(kind.toFixed(2));
    }
}
function redirectUser(user) {
    //user.manageSystem(); // error as a guest user doesn't have the manageSystem method
    //the 'in' operator checks if the property name exists inside the object
    if ("manageSystem" in user) {
        //typescript successfully narrows 'user' down to an AdminUser.
        user.manageSystem();
    }
    else {
        //typescript knows that the user must be a GuestUser here.
        user.viewDashboard();
    }
}
//# sourceMappingURL=Type_Narrowing.js.map
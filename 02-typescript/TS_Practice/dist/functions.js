"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//this function expects a string and a number and promises to return a string.
function makeChai(type, cups) {
    return `Making ${cups} cups of ${type} chai!`;
}
//this function does not return anything , so it uses 'void'.
function logStatus(message) {
    console.log(`System Status: ${message}`);
}
makeChai("Ginger", 2);
//# sourceMappingURL=functions.js.map
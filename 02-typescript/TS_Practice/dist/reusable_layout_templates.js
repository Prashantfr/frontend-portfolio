"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return [item];
}
// Call it with a string, it dynamically returns a string array
let stringArr = wrapInArray("hello"); // Type is automatically string[]
// Call it with a number, it dynamically returns a number array
let numberArr = wrapInArray(42); // Type is automatically number[]
//# sourceMappingURL=reusable_layout_templates.js.map
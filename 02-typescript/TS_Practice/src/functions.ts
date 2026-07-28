//this function expects a string and a number and promises to return a string.
function makeChai(type: string, cups: number): string{
    return `Making ${cups} cups of ${type} chai!`;
}

//this function does not return anything , so it uses 'void'.
function logStatus(message: string): void {
    console.log(`System Status: ${message}`);
}

makeChai("Ginger",2);
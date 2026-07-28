"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Model the response using a mock fetch structure
async function fetchTodoData(url) {
    const response = await fetch(url);
    // Tell TS to parse the incoming JSON file strictly as our custom TodoItem interface blueprint
    const data = await response.json();
    // Type 'data.' in VS Code to see 'completed', 'id', 'title', and 'userId' automatically pop up!
    console.log(data.title);
}
//# sourceMappingURL=webReqModeling.js.map
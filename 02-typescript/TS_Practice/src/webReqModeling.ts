// 1. Define what the backend API response data layout looks like
interface TodoItem {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// 2. Model the response using a mock fetch structure
async function fetchTodoData(url: string) {
    const response = await fetch(url);

    // Tell TS to parse the incoming JSON file strictly as our custom TodoItem interface blueprint
    const data: TodoItem = await response.json();

    // Type 'data.' in VS Code to see 'completed', 'id', 'title', and 'userId' automatically pop up!
    console.log(data.title); 
}
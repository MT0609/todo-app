var todoTasks = JSON.parse(localStorage.getItem("todo")) || [];

const todosReducer = (state = todoTasks, action) => {
    switch (action.type) {
        case "ADD_TODO":
            state = [...state, action.payload]
            localStorage.setItem("todo", JSON.stringify(state));
            return state;   
        case "REMOVE_TODO":
            state = state.filter(item => item.id !== action.payload.id);
            localStorage.setItem("todo", JSON.stringify(state));
            return state;
        default:
            return state;
    }
}

export default todosReducer;
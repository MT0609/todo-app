var todoTasks = JSON.parse(localStorage.getItem("todo")) || [];

const todosReducer = (state = todoTasks, action) => {
  switch (action.type) {
    case "ADD_TODO":
      state = [...state, action.payload];
      localStorage.setItem("todo", JSON.stringify(state));
      return state;
    case "REMOVE_TODO":
      state = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("todo", JSON.stringify(state));
      return state;
    case "EDIT_NAME_TODO":
      let newState = [...state];
      let index = newState.findIndex((item) => item.id === action.payload?.id);
      if (index === -1) {
        newState.push(action.payload);
      } else {
        newState[index] = action.payload;
      }
      localStorage.setItem("todo", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default todosReducer;

var completedTasks = JSON.parse(localStorage.getItem("complete")) || [];

const completedReducer = (state = completedTasks, action) => {
  switch (action.type) {
    case "ADD_COMPLETED":
      state = [...state, action.payload];
      localStorage.setItem("complete", JSON.stringify(state));
      return state;
    case "REMOVE_COMPLETE":
      state = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("complete", JSON.stringify(state));
      return state;
    case "EDIT_NAME_COMPLETE":
      let newState = [...state];
      let index = newState.findIndex((item) => item.id === action.payload?.id);
      if (index === -1) {
        newState.push(action.payload);
      } else {
        newState[index] = action.payload;
      }
      localStorage.setItem("complete", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default completedReducer;

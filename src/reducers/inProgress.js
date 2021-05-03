var inProgressTasks = JSON.parse(localStorage.getItem("progress")) || [];

const InProgressReducer = (state = inProgressTasks, action) => {
  switch (action.type) {
    case "ADD_INPROGRESS":
      state = [...state, action.payload];
      localStorage.setItem("progress", JSON.stringify(state));
      return state;
    case "REMOVE_PROGRESS":
      state = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("progress", JSON.stringify(state));
      return state;
    case "EDIT_NAME_PROGRESS":
      let newState = [...state];
      let index = newState.findIndex((item) => item.id === action.payload?.id);
      if (index === -1) {
        newState.push(action.payload);
      } else {
        newState[index] = action.payload;
      }
      localStorage.setItem("progress", JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
};

export default InProgressReducer;

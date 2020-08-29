var inProgressTasks = JSON.parse(localStorage.getItem("inProgress")) || [];

const InProgressReducer = (state = inProgressTasks, action) => {
    switch (action.type) {
        case "ADD_INPROGRESS":
            state = [...state, action.payload]
            localStorage.setItem("inProgress", JSON.stringify(state));
            return state;
        case "REMOVE_PROGRESS":
            state = state.filter(item => item.id !== action.payload.id);
            localStorage.setItem("inProgress", JSON.stringify(state));
            return state;
        default:
            return state;
    }
}

export default InProgressReducer;
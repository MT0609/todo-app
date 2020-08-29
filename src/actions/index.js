export const add_ToDo = (obj) => {
    return {
        type: "ADD_TODO",
        payload: obj
    }
}

export const add_InProgress = (obj) => {
    return {
        type: "ADD_INPROGRESS",
        payload: obj
    }
}

export const add_Completed = (obj) => {
    return {
        type: "ADD_COMPLETED",
        payload: obj
    }
}
export const remove_ToDo = (obj) => {
    return {
        type: "REMOVE_TODO",
        payload: obj
    }
}

export const remove_Progress = (obj) => {
    return {
        type: "REMOVE_PROGRESS",
        payload: obj
    }
}

export const remove_Complete = (obj) => {
    return {
        type: "REMOVE_COMPLETE",
        payload: obj
    }
}
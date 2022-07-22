export const SET_TASKS = "SET_TASKS";
export const SET_TASKS_ID = "SET_TASKS_ID";
export const DEL_ITEM = "DELITEM";
export const ADD_ITEM = "ADDITEM";

export const addItem = (product) => {
    return {
        type: ADD_ITEM,
        payload: product,
    };
};

export const delItem = (product) => {
    return {
        type: DEL_ITEM,
        payload: product,
    };
};

export const setTasks = (tasks) => (dispatch) => {
    dispatch({
        type: SET_TASKS,
        payload: tasks,
    });
};

export const setTaskID = (taskID) => (dispatch) => {
    dispatch({
        type: SET_TASKS_ID,
        payload: taskID,
    });
};

// export const minusPrice = (product) => {
//     return {
//         type: "MINUS",
//         payload: product,
//     };
// };

// export const addPrice = (product) => {
//     return {
//         type: "ADD",
//         payload: product,
//     };
// };

import { SET_TASKS, SET_TASKS_ID, DEL_ITEM } from "../action/index";

const initialState = {
    tasks: [],
    taskID: 1,
};

function taskReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TASKS:
            return { ...state, tasks: action.payload };
        case SET_TASKS_ID:
            return { ...state, taskID: action.payload };
        case DEL_ITEM:
            return state.filter((x) => {
                return x.id !== action.payload.id;
            });
        default:
            return state;
    }
}

export default taskReducer;

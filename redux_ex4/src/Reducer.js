
// const initialState= {
//     tasks: []
// }
// function reducer (state = initialState, action){
// switch(action.type) {
//     case "ADD_TASKS":
//         return {
//             tasks: [...state.tasks, action.tasking]
//         }
//         case "DELETE_TASKS":
//             // let newTask = state.tasks.filter((element, i) => i !== action.tasking12)
//         return {
//             tasks: state.tasks.filter((element, i) => i !== action.tasking12)
//         }
//         default: return state
// }
// }
// export default reducer




// last step version
// instead of having hook
const initialState = {
    tasks: [],
    inputValue: ""
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TASKS":
            return {
                // tasks: [...state.tasks, state.task]
                tasks: [...state.tasks, action.tasking], inputValue: ""
            };
        case "DELETE_TASK":
            // let newTask = state.tasks.filter((element, i) => i !== action.taskNumber))  
            return { ...state,
                tasks: state.tasks.filter((element, i) => i !== action.taskNumber)
            };

        case "UPDATE_INPUT":
            return {
                ...state,
                inputValue: action.string
            };
        default:
            return state
    }
}

export default reducer
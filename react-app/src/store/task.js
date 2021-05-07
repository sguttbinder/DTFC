const initialState = {
    tasks_by_id: {},
    selected_task: null
}

const SET_TASKS = "tasks/SET"
const ADD_TASKS = "tasks/ADD"

const set = task => ({
    type: SET_TASKS,
    payload: task
})

export const get_tasks = () => async (dispatch) => {
    const response = await fetch('/api/tasks')
    const tasks = await response.json()
    // todo
    if (response.ok) {
        dispatch(set(tasks))
        // set... will take task and use the reducer near the bottom to get the tasks added to the slice of state
        // ** don't seem to have an intitial state
        // eg. 
        console.log(tasks)
        return tasks
        
    }
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            // Return a new object.. with content of all old objects (state) AND all the contrnt that is in action.payload
            // return state
            return { ...state, tasks_by_id: action.payload.tasks }
        // case: add task
        default:
            return state
    }
}

export default taskReducer
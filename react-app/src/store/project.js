const initialState = {
    projects_by_id: {},
    selected_project: null
}

const SET_PROJECTS = "projects/SET"
const ADD_PROJECTS = "projects/ADD"

const set = project => ({
    type: SET_PROJECTS,
    payload: project
})

export const get_projects = () => async (dispatch) => {
    const response = await fetch('/api/projects')
    const projects = await response.json()
    // todo
    if (response.ok) {
        dispatch(set(projects))
        // Load... will take project and use the reducer near the bottom to get the projects added to the slice of state
        // ** don't seem to have an intitial state
        // eg. 
        console.log(projects)
        return projects
        
    }
    // dispatch the SET_PROJECTS action
    
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            // Return a new object.. with content of all old objects (state) AND all the contrnt that is in the other object... action.payload in this case 
            // return state
            return { ...state, projects_by_id: action.payload.projects }
        // case: add project
        default:
            return state
    }
}

export default projectReducer
const initialState = {
    projects_by_id: {},
    selected_project: null
}

const SET_PROJECTS = "projects/SET"

const get_projects = () => async (dispatch) => {
    const response = await fetch('/api/projects')
    const projects = await response.json()
    // todo
    // dispatch the SET_PROJECTS action
    console.log(projects)
    
}


const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return state
        default:
            return state
    }
}

export default projectReducer
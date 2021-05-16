const initialState = {
  projects_by_id: {},
  selected_project: null,
};

const SET_PROJECT = 'projects/SET';
const ADD_PROJECT = 'projects/ADD';
const UPDATE_PROJECT = 'projects/UPDATE';
const SET_SELECTED_PROJECT = 'projects/SELECT';

const set = (project) => ({
  type: SET_PROJECT,
  payload: project,
});

const add = (project) => ({
  type: ADD_PROJECT,
  payload: project,
});

const update = (project) => ({
  type: UPDATE_PROJECT,
  payload: project,
});

export const set_selected_project = (projectId) => ({
  type: SET_SELECTED_PROJECT,
  payload: projectId,
});

export const get_projects = () => async (dispatch) => {
  const response = await fetch('/api/projects');
  const projects = await response.json();
  // todo
  if (response.ok) {
    dispatch(set(projects));
    // Load... will take project and use the reducer near the bottom to get the projects added to the slice of state
    // ** don't seem to have an intitial state
    // eg.
    console.log(projects);
    return projects;
  }
};
// dispatch the SET_PROJECTS action
export const add_new_project = (project) => async (dispatch) => {
  console.log(project);
  const response = await fetch(`/api/projects/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  });
  const newProject = await response.json();
  if (response.ok) {
    dispatch(add(newProject));
    console.log(newProject);
    return newProject;
  }
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      // Return a new object.. with content of all old objects (state) AND all the contrnt that is in the other object... action.payload in this case
      // return state
      return { ...state, projects_by_id: action.payload.projects };
    // REVIEW Are these the same thing?
    case ADD_PROJECT:
      return { ...state, projects_by_id: action.payload.projects };
    case SET_SELECTED_PROJECT:
      return { ...state, selected_project: action.payload };
    default:
      return state;
  }
};

export default projectReducer;

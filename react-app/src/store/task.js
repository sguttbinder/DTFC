const initialState = {
  tasks_by_id: {},
  selected_task: null,
};

const SET_TASK = 'tasks/SET';
const ADD_TASK = 'tasks/ADD';
const UPDATE_TASK = 'tasks/UPDATE';
const DELETE_TASK = 'tasks/DELETE';

const set = (task) => ({
  type: SET_TASK,
  payload: task,
});

const add = (task) => ({
  type: ADD_TASK,
  payload: task,
});

const update = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

const remove = (task) => ({
  type: DELETE_TASK,
  payload: task,
});







export const get_tasks = (projectId) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}/tasks`);
  const tasks = await response.json();
  // todo
  if (response.ok) {
    dispatch(set(tasks));
    // set... will take task and use the reducer near the bottom to get the tasks added to the slice of state
    // ** don't seem to have an intitial state
    // eg.
    console.log(tasks);
    return tasks;
  }
};

export const add_new_task = (projectId, task) => async (dispatch) => {
  const response = await fetch(`/api/projects/${projectId}/tasks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const newTask = await response.json();
  // todo
  if (response.ok) {
    dispatch(add(newTask));
    // set... will take task and use the reducer near the bottom to get the task added to the slice of state
    // ** don't seem to have an intitial state
    // eg.
    //   TODO Don't forget to add to reducer
    console.log(newTask);
    return newTask;
  }
};

export const update_task = (projectId, task) => async (dispatch) => {
  console.log(task)
  const response = await fetch(`/api/projects/${projectId}/tasks/${task.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const updatedTask = await response.json();
  // todo
  if (response.ok) {
    dispatch(update(updatedTask));
    // set... will take task and use the reducer near the bottom to get the task added to the slice of state
    // ** don't seem to have an intitial state
    // eg.
    //   TODO Don't forget to add to reducer
    console.log(updatedTask);
    return updatedTask;
  }
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK:
      // Return a new object.. with content of all old objects (state) AND all the contrnt that is in action.payload
      // return state
      return { ...state, tasks_by_id: action.payload.tasks }
    // REVIEW Is this correct? Same as above? 
    case ADD_TASK:
      return { ...state, tasks_by_id: action.payload.tasks }
    // Check this.. .where's delete?
    case DELETE_TASK:
      return {...state, tasks_by_id: action.payload.tasks }
    default:
      return state;
  }
};

export default taskReducer;

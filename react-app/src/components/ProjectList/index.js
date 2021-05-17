import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import NewProjectButton from '../NewProjectButton/NewProjectButton';
import {
  get_projects,
  add_new_project,
  set_selected_project,
} from '../../store/project';
import './ProjectList.css';

const ProjectList = () => {
  const projects = useSelector((state) => {
    // Global function... gets just the objects based on our normalized function
    return Object.values(state.project.projects_by_id);
    // return state.project.projects_by_id
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_projects());
  }, [dispatch]);

  const selectProject = (projectId) => {
    // Sends the action to the store... which causes the reducers to run... which will send it to the switch and update the store
    dispatch(set_selected_project(projectId));
  };
  // Blank or dispatch in [] means it loads only on first render
  const add_new_project = (project) => {
    dispatch(add_new_project(project))
  }
  // to do
  // add useEffect that dispatches get_projects thunk
  //
  if (!projects) {
    return null;
  }

  return (
    <div>
      {/* State variable = reveal ... setreveal = useState with default value of false, hidden*/}

      <h1> Projects </h1>
      {/* new component or... just hard code the form */}
      <button className="newProjectButton" onClick={add_new_project}>
        Add Project +
      </button>
      <div>
        {projects.map((project) => {
          {
            /* Needs a function to send data back to thunk */
          }
          {
            /* onClick with an arrow function allows the data to passthrough regarding WHAT you clicked */
          }
          return (
            <li onClick={() => selectProject(project.id)}>{project.title}</li>
          );
        })}
        {/* {projects.title} */}
        {/* {projects.title} this won't work... so we'll have to iterate through it and then build out list items*/}
        {/* Render li projects */}
      </div>
      {/* ADD PROJECT BUTTON - Component */}
    </div>
  );
};

export default ProjectList;

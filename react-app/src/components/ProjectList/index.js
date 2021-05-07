import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import NewProjectButton from '../NewProjectButton/NewProjectButton';
import { get_projects } from "../../store/project";

import './ProjectList.css';

const ProjectList = () => {
  const projects = useSelector((state) => {
    // Global function... gets just the objects based on our normalized function
    return Object.values(state.project.projects_by_id);
    // return state.project.projects_by_id
  });

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_projects())
  }, [dispatch])
  // Blank or dispatch in [] means it loads only on first render

  // to do
  // add useEffect that dispatches get_projects thunk
  // 
  if (!projects) {
    return null
  }
  
  return (
    <div>
      <h1> Projects </h1>
      <ul>
        {/* Todo */}
        {Object.values(projects).map(project => {
          return <li>
            {project.title}
          </li>
        })
        }
        {/* {projects.title} */}
        {/* {projects.title} this won't work... so we'll have to iterate through it and then build out list items*/}
        {/* Render li projects */}
      </ul>
      {/* ADD PROJECT BUTTON - Component */}
    </div>
  );
};

export default ProjectList;

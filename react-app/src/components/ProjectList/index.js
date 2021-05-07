import React from 'react';
import { useSelector } from 'react-redux';
// import NewTaskButton from '../NewTaskButton/NewTaskButton';


import './ProjectList.css';

const ProjectList = () => {
  const projects = useSelector((state) => {
    // Global function... gets just the objects based on our normalized function
    return Object.values(state.project.projects_by_id);
  });


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
        {/* Render li projects */}
      </ul>
    </div>
  );
};

export default ProjectList;

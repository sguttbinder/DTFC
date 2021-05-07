import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProjectList from '../ProjectList/';
// import NewTaskButton from '../NewTaskButton/NewTaskButton';

import './sidebar.css'


const SideBar = () => {
  return (
    <div className="sidebar__container">
      <ProjectList />

    </div>
  );
}

export default SideBar;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../SideBar/index';
// import ProjectList from '../ProjectList/index/';
import TaskView from '../TaskView';
// import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="page-container">
      <SideBar />
      <TaskView />
    </div>
  );
};

export default Dashboard;

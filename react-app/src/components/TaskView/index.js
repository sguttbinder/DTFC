import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import NewTaskButton from '../NewTaskButton/NewTaskButton';
import { get_tasks } from "../../store/task";

import './TaskView.css';

const TaskView = () => {
  // ASK QUESTIONS HERE - why not line below?
  // const tasks = useSelector(state => state.tasks)
  const tasks = useSelector(state => {
    return Object.values(state.task.tasks_by_id);
    // Why not just return state.tasks_by_id)
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_tasks())
    // return () => {
    //   // What's a cleanup again? cleanup
    // }
  }, [dispatch])

  // Use useEffect to get get_tasks thunk

  if (!tasks) {
  return null  
}

  return (
    <div>
      <h1> Tasks </h1>
      {Object.values(tasks.map(task => {
        return <li>
          {task.title, task.description, task.completed}
        </li>
      }))}
    </div>
  );
};

export default TaskView;


// SECTION Imports 
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set_selected_project } from '../../store/project';

// import NewTaskButton from '../NewTaskButton/NewTaskButton';
import {
  get_tasks,
  update_task,
  add_new_task,
  delete_task,
} from '../../store/task';

import TaskCard from '../TaskCard/index';
import TaskCardNew from '../TaskCardNew';
import './TaskView.css';
// Analogy... loaded is telling front end, that the backend loaded the data into the database and that the state was updated on the front end.
const TaskView = () => {
  const [loaded, setLoaded] = useState(false);

  const selected_project = useSelector((state) => {
    if (state.project.selected_project) {
      return state.project.selected_project;
    } else {
      return 1;
    }
  });
  const selectProject = (projectId) => {
    // Sends the action to the store... which causes the reducers to run... which will send it to the switch and update the store
    dispatch(set_selected_project(projectId));
  };

  const tasks = useSelector((state) => state.task.tasks_by_id); // return Object.values(state.task.tasks_by_id);

  // Why not just return state.tasks_by_id) Returns an object instead  of an array... and you can't iterate at all
  // });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_tasks(selected_project));
    // return () => {
    //   // What's a cleanup again? cleanup
    // }
  }, [selected_project]);

  // Use useEffect to get get_tasks thunk
  // Make a boolean state

  // NOTE Add Task Thunk
  const add_task = async (task) => {
    const res = await dispatch(add_new_task(selected_project, task));
    // // setDescription('');
    // setTitle('');
    // setCompleted(false);
    setLoaded(res);
  };

  // NOTE Save Task Thunk
  const save_task = async (task) => {
    // if (task.id) {
    // We want you to go dispatch update_task. If it comes back (the res) we can rerender the page... with the updated information
    // console.log(task, 'Here is task');
    const res = await dispatch(update_task(selected_project, task));
    setLoaded(res);
    // } else {
    //   add_new_task()
    // }
    // Need to make sure the task.id is in the card.
  };

  // NOTE Delete Task Thunk
  const delete_task = async (task) => {
    const res = await dispatch(delete_task(selected_project, task));
    setLoaded(res);
  };

  useEffect(() => {
    if (loaded) {
      renderTasks();
      renderNewTask();
      // console.log("we rendered a new task")
      setLoaded(false);
    }
  }, [loaded]);

  if (!tasks) {
    return null;
  }
  // If we update our tasks... what would happen? We wait for setLoaded to occur... signalling that we need to re-render ONLY this block of code/component

  // NOTE Renders all tasks to display based on state
  const renderTasks = () => {
    return (
      tasks &&
      Object.values(tasks).map((task) => {
        return (
          <>
            <li>
              {/* {task.title} {task.description} {task.completed} */}
              {/* Refer to props  as to why the below works */}
              <TaskCard
                id={task.id}
                title={task.title}
                description={task.description}
                completed={task.completed}
                project={selected_project}
                // Below helps match it to TaskCard and TaskView
                onSave={save_task}
                // onSave={save_task, delete_task}
              />
            </li>
            {/* Delete button will go here */}
          </>
        );
      })
    );
  };

  // NOTE Creates blank new task field to add a task
  const renderNewTask = () => {
    return (
      <>
        <TaskCardNew
          title={''}
          description={''}
          completed={''}
          onSave={add_task}
        />
      </>
    );
  };

  // NOTE Renders Page
  return (
    <div className="TaskView">
      <div className="Title">Tasks for Project</div>
      <ul>
        {renderTasks()}
        {renderNewTask()}
      </ul>
    </div>
  );
};

export default TaskView;

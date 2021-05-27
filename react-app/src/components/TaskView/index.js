import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import NewTaskButton from '../NewTaskButton/NewTaskButton';
import { get_tasks, update_task, add_new_task } from '../../store/task';
import TaskCard from '../TaskCard/index';
import './TaskView.css';
// Analogy... loaded is telling front end, that the backend loaded the data into the database and that the state was updated on the front end. 
const TaskView = () => {
  const [loaded, setLoaded] = useState(false);

  const selected_project = useSelector((state) => {
    if (state.project.selected_project) {
      return state.project.selected_project;
    } else {
      // TODO get first item in list
      return 1;
    }
  });

  const tasks = useSelector((state) => state.task.tasks_by_id)    // return Object.values(state.task.tasks_by_id);
    
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
  // ANCHOR Add Task
  const add_task = async (task) => {
    const res = await dispatch(add_new_task(selected_project, task));
    setLoaded(res);
  };

  // ANCHOR Save Task
  const save_task = async (task) => {
    // if (task.id) {
    // We want you to go dispatch update_task. If it comes back (the res) we can rerender the page... with the updated information
    console.log(task, "Here is task")
    const res = await dispatch(update_task(selected_project, task));
    setLoaded(res);
    // } else {
    //   add_new_task()
    // }

    // Need to make sure the task.id is in the card.
  };

useEffect(() => {
  
  if (loaded) {
    console.log("We are reloading")
    renderTasks()
    setLoaded(false)
  }
}, [loaded])


  if (!tasks) {
    return null;
  }
  // If we update our tasks... what would happen? We wait for setLoaded to occur... signalling that we need to re-render ONLY this block of code/component
  let renderTasks = () => {
    console.log(tasks)
    return (tasks && Object.values(tasks).map((task) => {
      console.log(task)
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
              // Below helps match it to TaskCard and TaskView
              onSave={save_task}
            />
          </li>
          {/* Delete button will go here */}
        </>
      );
    }));
  };

  return (
    <div className="TaskView">
      <h1> Tasks</h1>
      <button onClick="">Add Task +</button>
      <ul>
        {renderTasks()}

        <TaskCard
          // Adds empty task fields.
          onSave={add_task}
        />
      </ul>
    </div>
  );
};

export default TaskView;

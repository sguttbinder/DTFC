import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import NewTaskButton from '../NewTaskButton/NewTaskButton';
import { get_tasks, update_task, add_new_task } from '../../store/task';
import TaskCard from '../TaskCard/index';
import './TaskView.css';

const TaskView = () => {
  // ASK QUESTIONS HERE - why not line below?.... We want an array
  // const tasks = useSelector(state => state.tasks)
  const selected_project = useSelector((state) => {
    if (state.project.selected_project) {
      return state.project.selected_project;
    } else {
      // TODO get first item in list
      return 1;
    }
  });

  const tasks = useSelector((state) => {
    return Object.values(state.task.tasks_by_id);
    // Why not just return state.tasks_by_id) Returns an object instead  of an array... and you can't iterate at all
  });

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
  const add_task = (task) => {
    dispatch(add_new_task(selected_project, task));
  };

  const save_task = (task) => {
    console.log("Press Me");
    dispatch(update_task(selected_project, task));

    // Need to make sure the task.id is in the card.
  };

  if (!tasks) {
    return null;
  }

  return (
    <div className="TaskView">
      <button onClick="">Add Task +</button>
      <h1> Tasks</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li>
              {/* {task.title} {task.description} {task.completed} */}
              {/* Refer to props  as to why the below works */}
              <TaskCard
                title={task.title}
                description={task.description}
                completed={task.completed}
                // Below helps match it to TaskCard and TaskView
                onSave={save_task}
                id={task.id}
              />
            </li>
          );
        })}
        {/* Empty Task */}
        <TaskCard
          // Below helps match it to TaskCard and TaskView
          onSave={add_task}
        />
      </ul>
    </div>
  );
};

export default TaskView;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_tasks, set_selected_task, delete_task } from '../../store/task';

import './TaskCard.css';
// useState hook to deal with local state that is 'Title'
// This is what the onChange is
// What is the props? The data that we're passing in through the Task index
const TaskCard = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [completed, setCompleted] = useState(props.completed);
  // const [taskId, setTaskId] = useState(props.id);
  // console.log(title, 'This prints every keystroke for Title... and updates props which even though is just part of a component... it changes the entire component');
  // Every time an input happens... onChange changes the state.
  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  // This is what the onChange is
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };
  // This is what the onChange is
  const updateCompleted = (e) => {
    setCompleted(e.target.checked);
  };

  const dispatch = useDispatch();
  // const select_task = (taskId) => {
  //   dispatch(set_selected_task(taskId) )
  // };
  const handleDelete = (projectId, task) => {
    dispatch(delete_task(projectId, task))
    window.location.reload();
}
  // const deleteTask = (e) => {
  //   setTaskId(e.target.id)
  // }

  // const remove_task = async (e) => {
  //   e.preventDefault();
  //   const data = await dispatch(delete_task(selected_project));
  //   if (data.errors) {
  //     setErrors(data.errors);
  //   }
  // };

  // Create a helper function for clicking submit
  // const handleSubmit = () => {
  //   if (props.id) {
  //     // onSave comes in via props (could also be anything since it's a key)
  //     props.onSave({
  //       //   The three below have useStates because they are getting modified
  //       title,
  //       description,
  //       completed,
  //       // This one is not getting modified
  //       id: props.id,
  //     });
  //   } else if (props.title) {
  //     props.onSave({
  //       //   The three below have useStates because they are getting modified
  //       title,
  //       description,
  //       completed,
  //       // For a new task, we don't have an ID yet
  //       // id: props.id,
  //     });
  //     setDescription(''), setTitle(''), setCompleted(false);
  //   }
  // };

  return (
    <div className="TaskCard">
      <input
        type="checkbox"
        name="completed"
        // If we have info... it gets shown. Right now, it gets undefined.
        checked={completed}
        onChange={updateCompleted}
      />
      <input
        autoComplete="off"
        type="text"
        name="title"
        value={title}
        className="formField-Title"
        onChange={updateTitle}
      />
      <textarea
        autoComplete="off"
        type="text"
        name="description"
        className="formField-Description"
        value={description}
        onChange={updateDescription}
      ></textarea>
      {/* NOTE Save Button */}
      <button
        className="SubButton"
        onClick={() => {
          props.onSave({
            //   The three below have useStates because they are getting modified
            title,
            description,
            completed,
            // This one is not getting modified
            id: props.id,
          });

          // // setDescription('');
          // setTitle('');
          // setCompleted(false);
        }}
      >
        {/* Save Task{` ${props.id}`} */}
        Save Task
      </button>

      {/* NOTE Delete Button */}
      <button
        className="SubButtonDel"
        onClick={() => handleDelete(props.project, props.id)}
      >
        Delete Task
      </button>
    </div>
  );
};

export default TaskCard;

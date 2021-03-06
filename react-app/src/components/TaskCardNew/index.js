import React, { useState } from 'react';
import '../TaskCard/TaskCard.css';
import '../../index.css';

// import './TaskCardNew.css';
// useState hook to deal with local state that is 'Title'

// This is what the onChange is
// What is the props? The data that we're passing in through the Task index
const TaskCardNew = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [completed, setCompleted] = useState(props.completed);

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
    <div className="TaskCardNew">
      <div className="boldWhite">Add a Task:</div>
      <input
        autoComplete="off"
        type="checkbox"
        name="completed"
        className="hideCheck"
        // If we have info... it gets shown. Right now, it gets undefined.
        checked={completed}
        onChange={updateCompleted}
      />
      <input
        type="text"
        placeholder="Title Your Task"
        autoComplete="off"
        name="title"
        className="formField-Title"
        value={title}
        onChange={updateTitle}
      />
      <textarea
        type="text"
        name="description"
        placeholder="What's it about?"
        className="formField-Description"
        value={description}
        onChange={updateDescription}
      ></textarea>
      <button
        className="NavButton  "
        onClick={() => {
          props.onSave({
            //   The three below have useStates because they are getting modified
            title,
            description,
            completed,
            // This one is not getting modified
          });

          setDescription('');
          setTitle('');
          setCompleted(false);
        }}
      >
        Add it!
      </button>
      {/* <button onClick={}>Delete </button> */}
    </div>
  );
};

export default TaskCardNew;

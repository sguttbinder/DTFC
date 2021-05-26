import React, { useState } from 'react';
import './TaskCard.css';
// useState hook to deal with local state that is 'Title'

// This is what the onChange is

const TaskCard = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [completed, setCompleted] = useState(props.completed);

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
  
  return (
    <div className="TaskCard">
      <input
        type="checkbox"
        name="completed"
        checked={completed}
        onChange={updateCompleted}
      />
      <input type="text" name="title" value={title} onChange={updateTitle} />
      <textarea type="text" name="description" onChange={updateDescription}>
        {description}
      </textarea>
      <button
        onClick={() => {
          props.onSave({
            //   The three below have useStates because they are getting modified
            title,
            description,
            completed,
            // This one is not getting modified
            id: props.id,
          });

          setDescription('');
          setTitle('');
          setCompleted(false);
        }}
      >
        Monkey 2{` ${props.id}`}
      </button>
      {/* <button onClick={}>Delete </button> */}
    </div>
  );
};

export default TaskCard;

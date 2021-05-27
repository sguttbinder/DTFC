import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { add_new_project } from '../../store/project';

const NewProjectButton = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState('')
  // const [title, setTitle] = useState(props.title)
  // const [completed, setCompleted] = useState('False')

  const addProject = async (e) => {
    e.preventDefault();
    const data = await dispatch(add_new_project(title));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={addProject}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="title">Project Title</label>
        <input
          name="title"
          type="text"
          placeholder="Name of your project"
          value={title}
          onChange={updateTitle}
          // onChange={updateProject}
        />
        {/* <input
          name="completed"
          type="hidden"
          checked={completed}
          onChange={setCompleted}
        /> */}
      </div>
      {/* <button className="NavButton" type="submit">
        Add Project +
      </button> */}
      <button className="NavButton" type='submit'>
        Add Project
      </button>
    </form>
  );
};

export default NewProjectButton;

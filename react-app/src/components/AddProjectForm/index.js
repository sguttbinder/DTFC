import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { add_project } from '../../store/project';

const AddProjectForm = () => {
  const dispatch = useDispatch();

  // const addProject = (e) => {
  //   setProject(e.target.value);
  // };

  return (
    // What's this form called?
    <form onSubmit={addProject}>
      {/* <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div> */}
      <div>
        <label htmlFor="title">Project Title</label>
        <input
          autoFocus="off"
          title="title"
          type="text"
          autoComplete="off"
          placeholder="Project Name"
          value={title}
          onChange={addProject}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default AddProjectForm;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { add_new_task, update_task } from '../../store/task';

const NewTaskButton = () => {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.session.user);
  // const [errors, setErrors] = useState([]);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const onLogin = async (e) => {
  //   e.preventDefault();
  //   const data = await dispatch(login(email, password));
  //   if (data.errors) {
  //     setErrors(data.errors);
  //   }
  // };

  const update_task = (e) => {
    setProject(e.target.value);
  };

  // const updatePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // if (user) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    // What's this form called?
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          title="title"
          type="text"
          placeholder="Task Name"
          value={title}
          onChange={update_task}
        />
      </div>
      <button type="submit">Monkey</button>
    </form>
  );
};

export default NewTaskButton;

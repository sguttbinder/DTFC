import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { add_project } from "../../store/project";

const NewProjectButton = () => {
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

  const updateProject = (e) => {
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
        <label htmlFor="email">Email</label>
        <input
          title="title"
          type="text"
          placeholder="Project Name"
          value={title}
          onChange={updateProject}
        />
      </div>
        <button type="submit">Login</button>
    </form>
  );
};

export default NewProjectButton;

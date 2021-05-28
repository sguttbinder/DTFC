import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { demo } from '../../store/session';
import './login.css';
import '../../index.css';
import NavBar from '../NavBar/index';

const DemoForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('demo@aa.io');
  const [password, setPassword] = useState('password');

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(demo(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };
  // This is what the onChange is
  const updateEmail = (e) => {
    setEmail("demo@aa.io");
  };

  // This is what the onChange is
  const updatePassword = (e) => {
    setPassword("password");
  };

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <input
              className="hidden-input"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className="hidden-input">
            <input
              className="hidden-input"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          </div>
          <button className="NavButton" type="submit">
            Demo
          </button>
        </form>
  );

}
export default DemoForm;

import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  const renderSignInLogIn = () => {
    if (user) {
      return null;
    }
    return (
      <>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
      </>
    );
  };
  const renderLogOut = () => {
    if (!user) {
      return null;
    }
    return (
      <>
        <li>
          <LogoutButton />
        </li>
      </>
    );
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        {renderSignInLogIn()}
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        {renderLogOut()}
      </ul>
    </nav>
  );
};

export default NavBar;

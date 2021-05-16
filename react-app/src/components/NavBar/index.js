import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  const renderSignInLogIn = () => {
    if (user) {
      return null;
    }
    return (
      <>
        <div className='navbar-links'>
          <div>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </div>
          <div>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </div>
        </div>
      </>
    );
  };
  const renderLogOut = () => {
    if (!user) {
      return null;
    }
    return (
      <>
        <div>
          <LogoutButton />
        </div>
      </>
    );
  };

  return (
    <nav classname="navBar">
        <div>
          <NavLink to="/" exact={true} activeClassName="active">
            About
          </NavLink>
        </div>
        {renderSignInLogIn()}
        {/* <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}
        {renderLogOut()}
    </nav>
  );
};

export default NavBar;

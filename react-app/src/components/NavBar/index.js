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
        {/* <div className="navbar-links"> */}
          {/* <div> */}
          {/* <button className="NavButton"> */}
          <NavLink to="/login" exact={true} >
            Login
          </NavLink>
          {/* </button> */}
          {/* </div> */}
          {/* <div> */}
          <NavLink to="/sign-up" exact={true} >
            Sign Up
          </NavLink>
          {/* </div> */}
        {/* </div> */}
      </>
    );
  };
  const renderLogOut = () => {
    if (!user) {
      return null;
    }
    return (
      <>
          <NavLink to="/dashboard" exact={true} >
            Dashboard
          </NavLink>
        <div>
          <LogoutButton />
        </div>
      </>
    );
  };

  return (
    <nav classname="navBar">
        <div>
          <NavLink to="/" exact={true} >
            About
          </NavLink>
        </div>
        {renderSignInLogIn()}
        {renderLogOut()}
    </nav>
  );
};

export default NavBar;

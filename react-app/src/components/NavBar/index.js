import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DemoForm from '../auth/DemoForm';
import LogoutButton from '../auth/LogoutButton';
import '../SplashPage/SplashPage.css';

import './NavBar.css';

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
        <NavLink to="/login" exact={true}>
          Login
        </NavLink>
        {/* </button> */}
        {/* </div> */}
        {/* <div> */}
        <NavLink to="/sign-up" exact={true}>
          Sign Up
        </NavLink>
        <div>
          <DemoForm />
        </div>
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
        <NavLink to="/dashboard" exact={true}>
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
      <div className="logo-corner ">
        <i class="fas fa-code icon-size"></i>
        <span className="logo-corner-text"> DFTC</span>
      </div>
      <div>
        <NavLink to="/" exact={true}>
          About
        </NavLink>
      </div>
      {renderSignInLogIn()}
      {renderLogOut()}
    </nav>
  );
};

export default NavBar;

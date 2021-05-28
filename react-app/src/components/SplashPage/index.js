import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/index';
import './SplashPage.css';

const SplashPage = () => {
  return (
    // <div className="page-container">
    <div className="splash-container">
      <div className="welcome-box">
        <div>
          <i class="fas fa-code icon-size"></i>
        </div>
        <div className="logo-font">Don't Forget The Code</div>
      </div>
      <div className="subtitle">
        A Simple Checklist App by
        <a href="https://github.com/sguttbinder" className="subtitle-link">
          <i class="fab fa-github icon-link-size"></i>
          <> </>
          Steve Guttbinder
        </a>
      </div>
    </div>
  );
};

export default SplashPage;

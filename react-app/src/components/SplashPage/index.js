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
        {/* <div className="list-icon">test</div> */}
      </div>
    </div>
    // </div>
  );
};

export default SplashPage;

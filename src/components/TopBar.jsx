import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          Call Us: 1-800-44-000-00
        </div>
        <div className="topbar-center">
          <span className="topbar-highlight">JOIN US</span> TO GET 10% OFF
        </div>
        <div className="topbar-right">
          <a href="#">Track Order</a>
          <span className="separator">|</span>
          <a href="#">Store Locator</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

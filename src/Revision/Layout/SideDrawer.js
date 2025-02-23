import React from 'react';
import './SideDrawer.css'; // Create your CSS for styling the drawer

const SideDrawer = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="side-drawer">
      <div className="side-drawer-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        {children} {/* This is where chatbot or any dynamic content will be displayed */}
      </div>
      <div className="side-drawer-overlay" onClick={onClose}></div>
    </div>
  );
};

export default SideDrawer;

import React from 'react';

const NavButton = ({ label, onClick }) => {
  return (
    <button className="nav-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default NavButton;

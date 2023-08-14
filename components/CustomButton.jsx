import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import LoginModal from './LoginModal';

const CustomButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const getButtonStyle = () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: isHovered ? '105px' : '45px',
    height: '40px',
    border: 'none',
    borderRadius: isHovered ? '40px' : '50%',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transitionDuration: '.3s',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.199)',
    backgroundColor: 'white',
  });

  const getSignStyle = () => ({
    width: isHovered ? '30%' : '110%',
    transitionDuration: '.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: isHovered ? 'flex-start' : 'center',
    paddingLeft: isHovered ? '20px' : '0',
  });

  const getSvgStyle = () => ({
    width: '15px',
  });

  const getTextStyle = () => ({
    position: 'relative',
    right: '0%',
    width: isHovered ? '70%' : '0%',
    opacity: isHovered ? 1 : 0,
    color: 'black',
    fontSize: '0.7em',
    fontWeight: 600,
    transitionDuration: '.3s',
    paddingRight: isHovered ? '10px' : '0',
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const [showLoginModal, setShowLoginModal] = useState(false); // State to control the LoginModal



  const handleLogout = async () => {
    await signOut();
    setShowLoginModal(true); // Open the LoginModal after logging out
  };

  return (
    <button

      style={getButtonStyle()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}

      style={{position: "relative", left: "5rem"}}
    >
      <div className="sign" style={getSignStyle()}>
        <svg viewBox="0 0 512 512" style={getSvgStyle()}>
          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
        </svg>
      </div>
      <text className="text" style={getTextStyle()} onClick={handleLogout}>
        logout
      </text>

    </button>
  );
};

export default CustomButton;




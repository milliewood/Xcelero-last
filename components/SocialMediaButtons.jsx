import React, { useState } from 'react';
import Image from 'next/image';
const SocialMediaButtons = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (card) => {
    setHoveredCard(card);
  };

  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5em',
    },
    up: {
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5em',
    },
    down: {
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5em',
    },
    card1: {
      width: '90px',
      height: '90px',
      outline: 'none',
      border: 'none',
      background: 'white',
      borderRadius: '90px 5px 5px 5px',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      transition: '0.2s ease-in-out',
    },
    instagram: {
      marginTop: '1.5em',
      marginLeft: '1.2em',
      fill: '#cc39a4',
    },
    card2: {
      width: '90px',
      height: '90px',
      outline: 'none',
      border: 'none',
      background: 'white',
      borderRadius: '5px 90px 5px 5px',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      transition: '0.2s ease-in-out',
    },
    twitter: {
      marginTop: '-0.6em',
      marginLeft: '1.9em',
      fill: '#03A9F4',
    },
    card3: {
      width: '90px',
      height: '90px',
      outline: 'none',
      border: 'none',
      background: 'white',
      borderRadius: '5px 5px 5px 90px',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      transition: '0.2s ease-in-out',
    },
    github: {
      marginTop: '1.5em',
      marginLeft: '1.2em',
    },
    card4: {
      width: '90px',
      height: '90px',
      outline: 'none',
      border: 'none',
      background: 'white',
      borderRadius: '5px 5px 90px 5px',
      boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      transition: '0.2s ease-in-out',
    },
    discord: {
      marginTop: '-0.9em',
      marginLeft: '1.2em',
      fill: '#8c9eff',
    },
    // Hover styles
    card1Hover: {
      cursor: 'pointer',
      transform: hoveredCard === 'card1' ? 'scale(1.1)' : 'scale(1)',
      backgroundColor: hoveredCard === 'card1' ? '#cc39a4' : 'white',
    },
    card2Hover: {
      cursor: 'pointer',
      transform: hoveredCard === 'card2' ? 'scale(1.1)' : 'scale(1)',
      backgroundColor: hoveredCard === 'card2' ? '#03A9F4' : 'white',
    },
    card3Hover: {
      cursor: 'pointer',
      transform: hoveredCard === 'card3' ? 'scale(1.1)' : 'scale(1)',
      backgroundColor: hoveredCard === 'card3' ? 'black' : 'white',
    },
    card4Hover: {
      cursor: 'pointer',
      transform: hoveredCard === 'card4' ? 'scale(1.1)' : 'scale(1)',
      backgroundColor: hoveredCard === 'card4' ? '#8c9eff' : 'white',
    },
    iconHover: {
      fill: 'white',
    },
  };

  return (
    <div style={styles.main}>
      <div style={styles.up}>
        <button
          style={{ ...styles.card1, ...styles.card1Hover }}
          className="card1"
          onMouseEnter={() => handleHover('card1')}
          onMouseLeave={() => handleHover(null)}
        >
          <Image
            src="/socialmarks/instamark.png"
            alt="Instagram Logo"
            width={50}
            height={50}
            className="instagram"
            style={{ ...styles.instagram, ...(hoveredCard === 'card1' && styles.iconHover) }}
          />
        </button>
        <button
          style={{ ...styles.card2, ...styles.card2Hover }}
          className="card2"
          onMouseEnter={() => handleHover('card2')}
          onMouseLeave={() => handleHover(null)}
        >
          <Image
            src="/socialmarks/gitmark.png"
            alt="Github Logo"
            width={30}
            height={30}
            className="github"
            style={{ ...styles.github, ...(hoveredCard === 'card2' && styles.iconHover) }}
          />
        </button>
      </div>
      <div style={styles.down}>
        <button
          style={{ ...styles.card3, ...styles.card3Hover }}
          className="card3"
          onMouseEnter={() => handleHover('card3')}
          onMouseLeave={() => handleHover(null)}
        >
          <Image
            src="/socialmarks/twittermark.png"
            alt="Twitter Logo"
            width={30}
            height={30}
            className="twitter"
            style={{ ...styles.twitter, ...(hoveredCard === 'card3' && styles.iconHover) }}
          />
        </button>
        <button
          style={{ ...styles.card4, ...styles.card4Hover }}
          className="card4"
          onMouseEnter={() => handleHover('card4')}
          onMouseLeave={() => handleHover(null)}
        >
          <Image
            src="/socialmarks/discordmark.png"
            alt="Discord Logo"
            width={30}
            height={30}
            className="discord"
            style={{ ...styles.discord, ...(hoveredCard === 'card2' && styles.iconHover) }}
          />
        </button>
      </div>
    </div>
  );
};

export default SocialMediaButtons;



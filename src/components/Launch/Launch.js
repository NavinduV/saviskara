import React, { useEffect, useState } from 'react';

const Launch = ({ onClick }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Dynamically create stars for the background animation
    const starContainer = document.getElementById('stars');
    for (let i = 0; i < 200; i++) {
      if (i < 60) { 
        const star = document.createElement('div');
        star.className = 'star1 star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starContainer.appendChild(star);
       } else if (i <120 ) {
        const star = document.createElement('div');
        star.className = 'star2 star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starContainer.appendChild(star);
      } else {
        const star = document.createElement('div');
        star.className = 'star3 star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starContainer.appendChild(star);
      }
      
    }
    return () => {
      // Cleanup stars on component unmount
      while (starContainer.firstChild) {
        starContainer.removeChild(starContainer.firstChild);
      }
    };
  }, []);

  // Use effect to show the button after 12 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 12000); // 12 seconds delay

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="launch">
      <div id="stars" class="stars"></div>
      <div className="background" id="background"></div>
      <div className="dashboard-container">
        <img src="logo/logo.png" alt="Saviskara Logo" className="logo" />
        {showButton && (
          <button className="launch-button launch-btn" onClick={onClick}>
            Launch Saviskara
          </button>
        )}{' '}
      </div>
    </div>
  );
};

export default Launch;

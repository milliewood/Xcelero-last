import React from 'react';

const CardGrid = () => {
  return (
    <div className="main">
      <div className="card" id="c1"></div>
      <div className="card" id="c2"></div>
      <div className="card" id="c3"></div>
      <div className="card" id="c4"></div>

      <style jsx>{`
        .card {
          width: 190px;
          height: 234px;
          background: rgba(211, 211, 211, 0.199);
          position: absolute;
          transition: 0.3s ease-in-out;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.3);
        }

        #c1 {
            background-image: url('/images/AI.jpeg'); 
            background-size: cover;
        }

        #c2 {
            background-image: url('/images/nodejs.png'); 
            background-size: cover; 
        }

        #c3 {
            background-image: url('/images/rails.jpeg'); 
            background-size: cover; 
          }

        #c4 {
            background-image: url('/images/nextjs.png'); 
            background-size: cover;
        }

        .main:hover #c1 {
          transform: translateX(-200px) rotate(-40deg);
        }

        .main:hover #c2 {
          transform: translateX(-150px) rotate(-30deg);
        }

        .main:hover #c3 {
          transform: translateX(0) rotate(-20deg);
        }

        .main:hover #c4 {
          transform: translateX(50px) rotate(-10deg);
        }

        #c1:hover {
          transform: translateX(-150px) rotate(0deg) !important;
        }

        #c2:hover {
          transform: translateX(-100px) rotate(0deg) !important;
        }

        #c3:hover {
          transform: translateX(-50px) rotate(0deg) !important;
        }

        #c4:hover {
          transform: translateX(50px) rotate(0deg) !important;
        }

        .main {
          display: grid;
          height: 50vmax;
          place-items: center;
        }
      `}</style>
    </div>
  );
};

export default CardGrid;

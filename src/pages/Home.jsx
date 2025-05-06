import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Preload background image
    const img = new Image();
    img.src = '/images/pexels-sahibuz-zaman-859110584-31854484.jpg';
    img.onload = () => setIsImageLoaded(true);

    return () => {
      img.onload = null; // Cleanup
    };
  }, []);

  return (
    <div className="home">
      <div className={`background-image ${isImageLoaded ? 'loaded' : ''}`}></div>
      <div className="content">
        <h1>Vishal Makwana</h1>
        <p>Full Stack Developer specializing in MERN stack development</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn primary">View My Work</Link>
          <Link to="/contact" className="btn secondary">Contact Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
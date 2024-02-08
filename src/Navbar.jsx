import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <h1>
          <img
            src="https://via.placeholder.com/150"
            alt="Happy Coaching Logo"
            style={{ width: '150px', height: 'auto' }}
          />
        </h1>
      </header>
     
    </div>
  );
};

export default Home;
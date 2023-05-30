import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <div>
          <nav className='header'>
            <div className='nav-logo'>
                <h2>E-LEARNING</h2>
            </div>
            <div className='nav-item'>
                <Link to='/topics'>Topics</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
         </nav>
      </div>
    );
};

export default Header;
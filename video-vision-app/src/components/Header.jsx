import React from 'react';
import '../styles/header.css'
import Search from './Search'

function Header(props) {
      return (
            <header className='header'>
                  <h1 className='header-title'>VideoVision</h1>
                  <Search/>
                  
            </header>
      );
}

export default Header;
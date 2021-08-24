import React from 'react';
import '../styles/header.css'
import Search from './Search'
import {Link} from 'react-router-dom'

function Header(props) {
      return (
            <header className='header'>
                  <h1 className='header-title'>
                    <Link to='' classname='header-title'>VideoVision</Link>    
                        </h1>
                
                
                  <Search/>
                  
            </header>
      );
}

export default Header;
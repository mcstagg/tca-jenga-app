import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
      <ul>
        <li>
          <Link to='/'>Home-Stats</Link>   
        </li>
        <li>
          <Link to='/gameSetup'>Game Setup</Link>   
        </li>
        <li>
          <Link to='/gameplay'>GamePlay</Link>   
        </li>
        <li>
          <Link to='/postGame'>PostGame</Link>   
        </li>
      </ul>
    )
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import './materialize.css';
import './App.css';

const Nav = (props) => {
  
  return (
      <div className="">
      <div className=" row nav blue darken-1">
        <h6 className="col s3 center nav-h6 home-stats-link">
           <Link to='/' className="nav-links">Home Stats</Link>   
         </h6>
         <h6 className="col s3 nav-h6 game-setup-link">
           <Link to='/gameSetup' className="nav-links">Game Setup</Link>   
         </h6>
         <h6 className="col s3 nav-h6 game-play-link">
           <Link to='/gameplay' className="nav-links">Game Play</Link>   
         </h6>
         <h6 className="col s3 nav-h6 post-game-link">
           <Link to='/postGame' className="nav-links">Post Game</Link>   
         </h6>
      </div>
      </div>
  )    
}

export default Nav;
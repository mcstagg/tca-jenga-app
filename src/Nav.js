import React from 'react';
import { Link } from 'react-router-dom';
import './materialize.css';
import './App.css';

const Nav = (props) => {
  
  return (
      <div className="">
      <div className=" row nav blue darken-1 center">
        <h6 className="col s3 center">
           <Link to='/' className="nav-links center">Home-Stats</Link>   
         </h6>
         <h6 className="col s3">
           <Link to='/gameSetup' className="nav-links">Game Setup</Link>   
         </h6>
         <h6 className="col s3">
           <Link to='/gameplay' className="nav-links">Gameplay</Link>   
         </h6>
         <h6 className="col s3">
           <Link to='/postGame' className="nav-links">Post Game</Link>   
         </h6>
      </div>
      </div>
  )    
}

export default Nav;
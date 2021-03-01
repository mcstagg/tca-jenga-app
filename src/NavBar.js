import React from 'react';
import { Link } from 'react-router-dom';
import './materialize.css';
import './App.css';

const NavBar = () => {
    return(
      <div className="row nav blue darken-1">
        <h6 className="col s3">
          <Link to='/' className="nav">Home-Stats</Link>   
        </h6>
        <h6 className="col s3">
          <Link to='/gameSetup' className="nav">Game Setup</Link>   
        </h6>
        <h6 className="col s3">
          <Link to='/gameplay' className="nav">GamePlay</Link>   
        </h6>
        <h6 className="col s3">
          <Link to='/postGame' className="nav">PostGame</Link>   
        </h6>
      </div>
    )
}

export default NavBar;
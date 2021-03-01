import React from 'react';
import { Link } from 'react-router-dom';
import './materialize.css';
import './App.css';

const NavBar = () => {
    return(
      <div className="row nav blue darken-1">
        <h6 className="col s3">
          <Link to='/'>Home-Stats</Link>   
        </h6>
        <h6 className="col s3">
          <Link to='/gameSetup'>Game Setup</Link>   
        </h6>
        <h6 className="col s3">
          <Link to='/gameplay'>GamePlay</Link>   
        </h6>
        <h6 className="col s3">
          <Link to='/postGame'>PostGame</Link>   
        </h6>
      </div>
    )
}

export default NavBar;
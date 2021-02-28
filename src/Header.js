import React from 'react';
import jenga from './tower.PNG';

const Header = () => {
  
  return (
    <div className="row deep-orange darken-1 header valign-wrapper">
      <img src={jenga} alt="jenga" className="col s3 m3 l2 header-towers p-0" />
      <h1 className="col s6 m6 l8 white-text header-text">Jenga <br/> Companion</h1>
      <img src={jenga} alt="jenga" className="col s3 m3 l2 header-towers p-0" />
    </div>
  )    
}

export default Header;
import React from 'react';
import jenga from './tower.PNG';

const Banner = () => {
  
  return (
    <div className="row deep-orange darken-1 banner valign-wrapper">
      <img src={jenga} alt="jenga" className="col s5 m3 l2 banner-towers p-0" />
      <h1 className="col s7 m6 l8 white-text banner-text">Jenga <br/> Companion</h1>
      <img src={jenga} alt="jenga" className="col m3 l2 banner-towers p-0 hide-on-small-only" />
    </div>
  )    
}

export default Banner;
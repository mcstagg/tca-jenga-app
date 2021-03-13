import React from 'react';
import './App.css';

const Header = (props) => {
  
  return (
    <div className={`row blue darken-1 header mbp valign-wrapper ${props.att}`}>
      <h5 className={`${props.h4textcol} header-text ${props.atts}`}>{props.h4text}</h5>
      {props.moveButton}
      {props.jengaButton}
      {props.quitButton}
    </div>
  )    
}

export default Header;
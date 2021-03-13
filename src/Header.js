import React from 'react';
import './App.css';

const Header = (props) => {
  
  return (
    <div className={`row blue darken-1 lb-header mbp valign-wrapper ${props.att}`}>
      <h4 className={`${props.h4textcol} lb-header-text ${props.atts}`}>{props.h4text}</h4>
      {props.moveButton}
      {props.jengaButton}
      {props.quitButton}
    </div>
  )    
}

export default Header;
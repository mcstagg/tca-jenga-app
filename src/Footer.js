import React from 'react';
import './App.css';

const Footer = (props) => {
  
  return (
    <div className={`row blue darken-1 footer mbp valign-wrapper ${props.att}`}>
      <h4 className={`${props.h4textcol} footer-text ${props.atts}`}>{props.h4text}</h4>
      {props.moveButton}
      {props.jengaButton}
      {props.quitButton}
    </div>
  )    
}

export default Footer;
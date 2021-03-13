import React from 'react';
import './App.css';

const Footer = (props) => {
  
  return (
    <div className={`row blue darken-1 footer mbp valign-wrapper ${props.att}`}>
      <h5 className={`${props.h4textcol} footer-text ${props.atts}`}>{props.h4text}</h5>
      {props.moveButton}
      {props.jengaButton}
      {props.quitButton}
    </div>
  )    
}

export default Footer;
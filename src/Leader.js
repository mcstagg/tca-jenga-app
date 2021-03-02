import React from 'react';
import './App.css';

const Leader = (props) => {
  
  return (
    <div className={`row blue darken-1 lb-header valign-wrapper`}>
      <h4 className={`${props.column} lb-header-text m-0 p-0 ${props.atts}`}>{props.text}</h4>
      {props.button}
      <a href={props.btnlink} className={`waves-effect waves-light btn-large col s3 valign-wrapper`}>{props.btntext}<i className="large material-icons"></i></a>
    </div>
  )    
}

export default Leader;
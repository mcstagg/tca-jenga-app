import React from 'react';

const Leader = (props) => {
  
  return (
    <div className="row blue darken-1 leaderboard-header valign-wrapper">
        <h4 className="col s6 lb-header-text m-0">{props.text}</h4>
        <a href={props.btnlink} className="waves-effect waves-light btn-large col s3 offset-s4 valign-wrapper">{props.btntext}<i className="large material-icons"></i></a>
      </div>
  )    
}

export default Leader;
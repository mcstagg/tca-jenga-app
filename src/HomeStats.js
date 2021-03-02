import React from 'react';
import Leader from './Leader';
import Table from './Table';

const HomeStats = () => {

  return (
    <>
      <Leader h4text="Leaderboard" moveButton={<a href="/gameSetup" className={`waves-effect waves-light btn-large col s3 offset-s5 valign-wrapper`}>PLAY JENGA!<i className="large material-icons"></i></a>} />
      <Table />
      <Leader h4text="Ready to Start?" atts="pl-3" moveButton={<a href="/gameSetup" className={`waves-effect waves-light btn-large col s3 offset-s2 valign-wrapper`}>PLAY JENGA!<i className="large material-icons"></i></a>}/>
    </>
  )    
}   

export default HomeStats;
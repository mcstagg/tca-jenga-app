import React from 'react';
import Leader from './Leader';
import Table from './Table';

const HomeStats = () => {

  return (
    <>
      <Leader text="Leaderboard" btnlink="./gameSetup" btntext="Play JENGA!" />
      <Table />
      <Leader text="Ready to Start?" btnlink="./gameSetup" btntext="Play JENGA!" atts="pl-3"/>
    </>
  )    
}   

export default HomeStats;
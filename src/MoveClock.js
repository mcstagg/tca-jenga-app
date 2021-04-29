import React from 'react';
import {useState, useEffect} from 'react';
import moment from 'moment';

function MoveClock () {

  const [moveTime, setMoveTime] = useState(moment.utc(Date.now()).format('HH:mm:ss'));
  
  useEffect(
    () => {

      var start = Date.now();

      setInterval(
        () => {
          var delta = Date.now() - start; // milliseconds elapsed since start
          var date = new Date(delta);
          setMoveTime(moment.utc(date).format('HH:mm:ss'));
        }, 1000 // update about every second
      ); 
    },
  []);
  
  return (
    <>
      {moveTime}
    </>
  );
}

export default MoveClock;
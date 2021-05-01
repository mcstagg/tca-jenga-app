import React from 'react';
import {useState, useEffect} from 'react';
import moment from 'moment';

function GameClock ({ setTime }) {

  // start gameTime at 00:00:00
  const [gameTime, setGameTime] = useState(moment.utc(Date.now()).format('HH:mm:ss'));
  let timer = null;

  useEffect(
    () => {

      var start = Date.now(); // create start time when component loads

      timer = setInterval(
        () => {
          var delta = Date.now() - start; // milliseconds elapsed since start time
          var date = new Date(delta); // create date for elapsed time
          var timeString = moment.utc(date).format('HH:mm:ss'); // convert date to string
          setGameTime(timeString);
          setTime(timeString);
        }, 1000 // update about every second
      );

      return () => {
        clearInterval(timer);
      }
    },
  []);
  
  return (
    <>
      {gameTime}
    </>
  );
}

export default GameClock;
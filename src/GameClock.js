import React from 'react';
import {useState, useEffect} from 'react';
import moment from 'moment';

function GameClock ({setTime}) {

  const [gameTime, setGameTime] = useState(moment.utc(Date.now()).format('HH:mm:ss'));
  let timer = null;

  useEffect(
    () => {

      var start = Date.now();

      timer = setInterval(
        () => {
          var delta = Date.now() - start; // milliseconds elapsed since start
          var date = new Date(delta);
          var timeString = moment.utc(date).format('HH:mm:ss'); 
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
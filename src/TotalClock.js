import React from 'react';
import {useState, useEffect} from 'react';
import moment from 'moment';

function TotalClock ({startTimeSeconds}) {

  const [totalPlayerTime, setTotalPlayerTime] = useState(
    moment.utc(Date.now()).format('HH:mm:ss'));

  useEffect(
    () => {

      var startDate = moment(Date.now());

      setInterval(
        () => {
          var delta = Date.now() - startDate; // milliseconds elapsed since start
          var date = new Date(delta);
          setTotalPlayerTime(moment.utc(date).format('HH:mm:ss'));
        }, 1000 // update about every second
      ); 
    },
  [startTimeSeconds]);
  
  return (
    <>
      {totalPlayerTime}
    </>
  );
}

export default TotalClock;
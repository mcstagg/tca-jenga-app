import React from 'react';
import {useState, useEffect} from 'react';
import moment from 'moment';

function Clock () {
  const [time, setTime] = useState(moment.utc(Date.now()).format('HH:mm:ss'));

  useEffect(() => {
    var start = Date.now();

    setInterval(function() {
      var delta = Date.now() - start; // milliseconds elapsed since start
      var date = new Date(delta);
      setTime(moment.utc(date).format('HH:mm:ss'));
    }, 1000); // update about every second

  }, [])
  
  return <>{time}</>;
}

export default Clock;
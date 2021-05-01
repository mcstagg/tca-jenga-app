import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";

function MoveClock({ setTimeElapsed, startTimeSeconds }) {
  // start gameTime at 00:00:00
  const [moveTime, setMoveTime] = useState(
    moment.utc(Date.now()).format("HH:mm:ss")
  );
  let timer = null;

  useEffect(() => {
    var start = new Date(startTimeSeconds * 1000); // create start time when component loads

    timer = setInterval(
      () => {
        var delta = Date.now() - start; // milliseconds elapsed since start time
        var timeElapsedDate = new Date(delta); // create date for elapsed time
        var timeString = moment.utc(timeElapsedDate).format("HH:mm:ss"); // convert date to string
        setMoveTime(timeString);
        setTimeElapsed(delta / 1000);
      },
      1000 // update about every second
    );

    return () => {
      clearInterval(timer);
    };
  }, [startTimeSeconds]);

  return <>{moveTime}</>;
}

export default MoveClock;

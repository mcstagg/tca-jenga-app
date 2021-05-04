import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";

function MoveClock({ setTimeElapsed, resetTimerTrigger }) {
  // start gameTime at 00:00:00
  const [moveTime, setMoveTime] = useState(
    moment.utc(Date.now()).format("HH:mm:ss")
  );
  let timer = null;

  useEffect(() => {
    // create start Date from start time seconds
    var startDate = Date.now();

    timer = setInterval(
      () => {
        var delta = Date.now() - startDate; // milliseconds elapsed since start time
        var timeElapsedDate = new Date(delta); // create date for elapsed time
        var timeString = moment.utc(timeElapsedDate).format("HH:mm:ss"); // convert date to string
        setMoveTime(timeString);

        setTimeElapsed(delta / 1000); // update seconds elapsed
      },
      1000 // update about every second
    );

    return () => {
      clearInterval(timer);
    };
  }, [resetTimerTrigger]);

  return <>{moveTime}</>;
}

export default MoveClock;

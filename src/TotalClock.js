import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";

function TotalClock({ AddTimeSeconds, resetTimerTrigger }) {
  const [totalPlayerTime, setTotalPlayerTime] = useState(
    moment.utc(Date.now()).format("HH:mm:ss")
  );
  let timer = null;

  useEffect(() => {
    var startDate = moment(Date.now()).subtract(AddTimeSeconds, "seconds");
    timer = setInterval(
      () => {
        var delta = Date.now() - startDate; // milliseconds elapsed since start
        var date = new Date(delta);
        setTotalPlayerTime(moment.utc(date).format("HH:mm:ss"));
      },
      1000 // update about every second
    );

    return () => {
      clearInterval(timer);
    };
  }, [resetTimerTrigger]);

  return <>{totalPlayerTime}</>;
}

export default TotalClock;

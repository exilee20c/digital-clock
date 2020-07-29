import React, { useState, useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import c from "./StopWatch.module.scss";
import Time from "../Time/Time";
import { getTimesFromMillis } from "../../../helpers/time";

function StopWatch(props) {
  const [active, setActive] = useState(false);
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const [startDate, setStartDate] = useState(new Date());
  const startDateRef = useRef(startDate);
  useEffect(() => {
    startDateRef.current = startDate;
  }, [startDate]);

  const [pausedTime, setPausedTime] = useState(0);
  const pausedTimeRef = useRef(pausedTime);
  useEffect(() => {
    pausedTimeRef.current = pausedTime;
  }, [pausedTime]);

  const [lapTimes, setLapTimes] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(
    new Date() - startDate + pausedTime
  );

  const tick = useRef(() => {
    if (activeRef.current) {
      setElapsedTime(new Date() - startDateRef.current + pausedTimeRef.current);
      requestAnimationFrame(tick.current);
    }
  });

  useEffect(() => {
    requestAnimationFrame(tick.current);
  }, [active]);

  const handleStartClick = useCallback(() => {
    if (!active) {
      setActive(true);
      setStartDate(new Date());
    }
  }, [active]);
  const handleStopClick = useCallback(() => {
    if (active) {
      setActive(false);
      setPausedTime(elapsedTime);
    }
  }, [active, elapsedTime]);
  const handleLapTimeClick = useCallback(() => {
    if (active) {
      const newLapTimes = Array.from(lapTimes);
      newLapTimes.push(new Date() - startDate + pausedTime);
      setLapTimes(newLapTimes);
    }
  }, [active, lapTimes, pausedTime, startDate]);
  const handleResetClick = useRef(() => {
    setActive(false);
    setStartDate(new Date());
    setElapsedTime(0);
    setPausedTime(0);
    setLapTimes([]);
  });

  return (
    <div className={c["wrapper"]}>
      <div>
        <div>Elapsed Times</div>
        <Time {...getTimesFromMillis(elapsedTime)} />
      </div>
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handleStopClick}>Stop</button>
      <button onClick={handleLapTimeClick}>Lap Time</button>
      <button onClick={handleResetClick.current}>Reset</button>
      <ol>
        {lapTimes.map((time, i) => (
          <li key={i}>{time}</li>
        ))}
      </ol>
    </div>
  );
}

StopWatch.defaultProps = {};
StopWatch.propTypes = {};

export default StopWatch;

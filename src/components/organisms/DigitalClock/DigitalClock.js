import React, { useState, useRef, useEffect } from "react";
import mapDigit from "../../../helpers/mapDigit";
import getZeroPadString from "../../../helpers/getZeroPadString";

function DigitalClock() {
  const [date, setDate] = useState(new Date());
  const dateRef = useRef(date);

  const refreshDate = useRef(() => {
    const newDate = new Date();
    setDate(newDate);
    dateRef.current = newDate;
    nextTick.current();
  });

  const nextTick = useRef(() =>
    setTimeout(refreshDate.current, 1000 - dateRef.current.getMilliseconds())
  );

  useEffect(() => {
    const timeout = nextTick.current();
    return () => clearTimeout(timeout);
  }, []);

  const HH = getZeroPadString(date.getHours());
  const mm = getZeroPadString(date.getMinutes());
  const ss = getZeroPadString(date.getSeconds());

  return (
    <div>
      {Array.from(HH).map(mapDigit)}:{Array.from(mm).map(mapDigit)}:
      {Array.from(ss).map(mapDigit)}
    </div>
  );
}

export default DigitalClock;

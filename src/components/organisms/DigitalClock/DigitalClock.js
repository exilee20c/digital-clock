import React, { useState, useRef, useEffect } from "react";
import Digit from "../../atoms/Digit";

function getZeroPadString(number, stack = 1) {
  const remainStack = stack - 1;
  const fn =
    remainStack > 0 ? (i) => getZeroPadString(i, remainStack) : (i) => i;

  return number.toString().replace(/([0-9]*)?([0-9])$/g, function (_, $1, $2) {
    return `${fn($1 || 0)}${$2}`;
  });
}

function mapDigit(digit, i) {
  return <Digit key={i} value={+digit} />;
}

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

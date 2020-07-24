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
  const refreshDate = useRef(() => setDate(new Date()));

  useEffect(() => {
    const interval = setInterval(refreshDate.current, 1000);
    return () => clearInterval(interval);
  }, []);

  const HH = getZeroPadString(date.getHours());
  const mm = getZeroPadString(date.getMinutes());
  const ss = getZeroPadString(date.getSeconds());
  const SSS = getZeroPadString(date.getMilliseconds(), 2);

  return (
    <div>
      {Array.from(HH).map(mapDigit)}:{Array.from(mm).map(mapDigit)}:
      {Array.from(ss).map(mapDigit)}:{Array.from(SSS).map(mapDigit)}
    </div>
  );
}

export default DigitalClock;

import React from "react";
import Digit from "../../atoms/Digit";

function getZeroPadString(number) {
  return number.toString().replace(/([0-9])?([0-9])$/g, function (_, $1, $2) {
    return `${$1 || 0}${$2}`;
  });
}

function mapDigit(digit, i) {
  return <Digit key={i} value={digit} />;
}

function DigitalClock() {
  const date = new Date("2020-07-20 13:03:41");

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

import React from "react";
import PropTypes from "prop-types";
// import c from "./Time.module.scss";
import getZeroPadString from "../../../helpers/getZeroPadString";
import mapDigit from "../../../helpers/mapDigit";

function Time({ years, weeks, days, hours, minutes, seconds, millis }) {
  const yearsString = years.toString();
  const weeksString = weeks.toString();
  const daysString = days.toString();
  const hoursString = getZeroPadString(hours);
  const minutesString = getZeroPadString(minutes);
  const secondsString = getZeroPadString(seconds);
  const millisString = getZeroPadString(millis, 2);

  return (
    <>
      {Array.from(yearsString).map(mapDigit)}:
      {Array.from(weeksString).map(mapDigit)}:
      {Array.from(daysString).map(mapDigit)}:
      {Array.from(hoursString).map(mapDigit)}:
      {Array.from(minutesString).map(mapDigit)}:
      {Array.from(secondsString).map(mapDigit)}.
      {Array.from(millisString).map(mapDigit)}
    </>
  );
}

Time.defaultProps = {
  years: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  millis: 0,
};
Time.propTypes = {
  years: PropTypes.number,
  weeks: PropTypes.number,
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  millis: PropTypes.number,
};

export default Time;

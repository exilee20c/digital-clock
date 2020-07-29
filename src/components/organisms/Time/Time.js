import React from "react";
import PropTypes from "prop-types";
import c from "./Time.module.scss";
import getZeroPadString from "../../../helpers/getZeroPadString";
import mapDigit from "../../../helpers/mapDigit";

function Time({ years, weeks, days, hours, minutes, seconds, millis }) {
  const yearsString = `${years}`;
  const weeksString = `${weeks}`;
  const daysString = `${days}`;

  return (
    <div>
      <div>{123}</div>
    </div>
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

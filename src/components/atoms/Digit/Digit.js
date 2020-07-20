import React from "react";
import PropTypes from "prop-types";
import c from "./Digit.module.scss";

function Digit({ value }) {
  return <div className={c["wrapper"]}>{value}</div>;
}

Digit.defaultProps = { value: 0 };
Digit.propTypes = { value: PropTypes.number };

export default Digit;

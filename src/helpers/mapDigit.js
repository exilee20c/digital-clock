import React from "react";
import Digit from "../components/atoms/Digit";

function mapDigit(digit, i) {
  return <Digit key={i} value={+digit} />;
}

export default mapDigit;

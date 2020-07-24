import React from "react";
import PropTypes from "prop-types";
import c from "./Digit.module.scss";

const ENTIRE_STATE_MATRIX = [
  [1, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1],
];

function Digit({ value }) {
  const stateMatrix = ENTIRE_STATE_MATRIX[value];

  return (
    <div className={c["wrapper"]}>
      {new Array(3)
        .fill("horizontal")
        .concat(new Array(4).fill("vertical"))
        .map((orientation, i) => (
          <div
            key={i}
            className={
              c["dash"] +
              " " +
              c[orientation] +
              " " +
              c[`dash-${i + 1}`] +
              (stateMatrix[i] ? " " + c["active"] : "")
            }
          />
        ))}
    </div>
  );
}

Digit.defaultProps = { value: 0 };
Digit.propTypes = { value: PropTypes.number };

export default Digit;

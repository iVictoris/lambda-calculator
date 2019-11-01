import React from "react";

const NumberButton = ({value, className}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={className}>
      {value}
      </button>
    </>
  );
};

export default NumberButton;
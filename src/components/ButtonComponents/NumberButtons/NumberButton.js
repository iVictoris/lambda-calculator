import React from "react";

const NumberButton = ({value}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {value}
    </>
  );
};

export default NumberButton;
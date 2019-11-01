import React from "react";

const SpecialButton = ({value, className}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={className}>
      {value}
      </button>
    </>
  );
};

export default SpecialButton;
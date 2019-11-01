import React from "react";

const NumberButton = ({value, className}) => {
  const newClassName = value === '0' ? 'specialNumber' : ''
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={className.concat(` numbers ${newClassName}`)}>
      {value}
      </button>
    </>
  );
};

export default NumberButton;
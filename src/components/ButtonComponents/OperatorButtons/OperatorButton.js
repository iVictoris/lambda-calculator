import React from "react";

const OperatorButton = ({ value, className }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className={className.concat(' operator')}>{value}</button>
    </>
  );
};

export default OperatorButton;

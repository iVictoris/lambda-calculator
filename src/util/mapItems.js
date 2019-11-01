import React from "react";

export const createElements = (ImportedComponent, acceptObjects = false) => {
  const defaultProps = {
    value: "",
    className: "btn",
    key: ''
  };
  
  if (acceptObjects) {
    return ({value}) => {
      const props = setProps(defaultProps, {value, key: value})

      return <ImportedComponent {...props} />
    }
  }

  return (value) => {
    const props = setProps(defaultProps, {value, key: value})
    return <ImportedComponent {...props} />
  }
};

const setProps = (initialPropValues, valueToInsert) => {
  return {
    ...initialPropValues,
    ...valueToInsert
  }
}
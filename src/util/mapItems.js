import React from "react";

export const createElements = (ImportedComponent, acceptObjects = false) => {
  if (acceptObjects)
    return ({ value }) => <ImportedComponent value={value} key={value} />;
  return value => <ImportedComponent value={value} key={value} />;
};

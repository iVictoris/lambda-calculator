import React from 'react';

export const createElements = (ImportedComponent) => (value) => {
  return <ImportedComponent value={value} key={value} />
}
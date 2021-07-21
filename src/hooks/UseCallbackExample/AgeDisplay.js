import React from 'react';

const AgeDisplay = ({ age }) => {
  console.log('AgeDisplay');
  return <>Age: {age}</>;
};

export default React.memo(AgeDisplay);

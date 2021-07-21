import React from 'react';

const SalaryDisplay = ({ salary }) => {
  console.log('SalaryDisplay');
  return <>Salary: {salary}</>;
};

export default React.memo(SalaryDisplay);

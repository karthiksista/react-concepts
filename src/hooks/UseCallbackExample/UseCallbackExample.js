import React, { useState, useCallback } from 'react';

import { Button } from 'reactstrap';

import AgeDisplay from './AgeDisplay';
import SalaryDisplay from './SalaryDisplay';

const UseCallbackExample = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);

  return (
    <>
      <AgeDisplay age={age} />

      <div style={{ margin: '10px' }}>
        <Button color="primary" onClick={incrementAge}>
          Increment Age
        </Button>
      </div>

      <SalaryDisplay salary={salary} />

      <div style={{ margin: '10px' }}>
        <Button color="warning" onClick={incrementSalary}>
          Increment Salary
        </Button>
      </div>
    </>
  );
};

export default UseCallbackExample;

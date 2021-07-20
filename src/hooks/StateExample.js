import React, { useState } from 'react';
import { Button } from 'reactstrap';

const StateExample = () => {
  const [title, setTitle] = useState('Say My Name');

  return (
    <>
      <div>{title}</div>
      <div>
        <Button onClick={() => setTitle('You Are God Damn Right!!')}>
          {' '}
          Heisenberg{' '}
        </Button>
      </div>
    </>
  );
};

export default StateExample;

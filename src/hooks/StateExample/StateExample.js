import React, { useState } from 'react';
import { Button } from 'reactstrap';

const StateExample = () => {
  const [title, setTitle] = useState('Say My Name');

  console.log('UseState Render');

  return (
    <>
      <div style={{ padding: '10px' }}>{title}</div>
      <div>
        <Button
          color="success"
          onClick={() => setTitle('You Are God Damn Right!!')}
        >
          {' '}
          Heisenberg{' '}
        </Button>
      </div>
    </>
  );
};

export default StateExample;

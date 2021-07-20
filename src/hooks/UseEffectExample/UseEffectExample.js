import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

const UseEffectExample = () => {
  const [name, setName] = useState('mn');
  const [id, setId] = useState(1);

  useEffect(async () => {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setName(data.data.name);
  }, [id]);

  const getUsers = () => {
    console.log('Name', Math.floor(Math.random() * 10) + 1);

    setId(Math.floor(Math.random() * 10) + 1);
  };

  console.log('UsedEffect Render');
  return (
    <div>
      <div style={{ padding: '10px' }}>UserName: {name}</div>
      <Button color="primary" onClick={() => getUsers()}>
        {' '}
        Get Random User Name
      </Button>
    </div>
  );
};

export default UseEffectExample;

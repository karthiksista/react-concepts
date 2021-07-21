import React, { useState, useRef } from 'react';
import { Button } from 'reactstrap';

const UseRefExample = () => {
  const [fav, setFav] = useState('');

  const favRef = useRef(null);

  const changeVal = val => {
    setFav(val);
  };

  const favFocus = () => {
    favRef.current.focus();
  };

  return (
    <>
      <div>
        <input ref={favRef} onChange={e => changeVal(e.target.value)} />
      </div>
      <div style={{ margin: '10px' }}>
        My Fav Character from The Office show is: {fav}
      </div>
      <div style={{ margin: '10px' }}>
        <Button color="info" onClick={favFocus}>
          {' '}
          Focus on the input
        </Button>{' '}
      </div>
    </>
  );
};

export default UseRefExample;

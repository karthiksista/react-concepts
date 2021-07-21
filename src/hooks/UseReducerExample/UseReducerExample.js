import React, { useReducer, useEffect } from 'react';

import { Button } from 'reactstrap';

const UseReducerExample = () => {
  const initialState = {
    count: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'Increment':
        return {
          count: state.count + 1
        };
      case 'Decrement':
        return {
          count: state.count <= 0 ? 0 : state.count - 1
        };
      case 'Reset':
        return {
          count: 0
        };
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>How Many Times Have You Rewatched The Office ? : {state.count}</div>
      <div>
        <Button
          style={{ margin: '10px' }}
          color="secondary"
          onClick={() => dispatch({ type: 'Decrement' })}
        >
          -
        </Button>
        <Button
          style={{ margin: '10px' }}
          color="primary"
          onClick={() => dispatch({ type: 'Increment' })}
        >
          +
        </Button>
        <Button
          style={{ margin: '10px' }}
          color="warning"
          onClick={() => dispatch({ type: 'Reset' })}
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default UseReducerExample;

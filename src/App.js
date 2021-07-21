import React from 'react';
import './style.css';

import CardHolder from './components/CardHolder';
import StateExample from './hooks/StateExample/StateExample';
import UseEffectExample from './hooks/UseEffectExample/UseEffectExample';
import UseReducerExample from './hooks/UseReducerExample/UseReducerExample';
import UseRefExample from './hooks/UseRefExample/UseRefExample';
import UseCallBackExample from './hooks/UseCallbackExample/UseCallbackExample';

export default function App() {
  return (
    <div>
      <h1 className="text-center">React Drive Thru!</h1>

      <CardHolder title={'useState Blitz'}>
        <StateExample />
      </CardHolder>

      <CardHolder title={'useEffect Blitz'}>
        <UseEffectExample />
      </CardHolder>

      <CardHolder title={'useReducer Blitz'}>
        <UseReducerExample />
      </CardHolder>

      <CardHolder title={'useRef Blitz'}>
        <UseRefExample />
      </CardHolder>

      <CardHolder title={'useCallback Blitz'}>
        <UseCallBackExample />
      </CardHolder>
    </div>
  );
}

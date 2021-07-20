import React from 'react';
import './style.css';

import CardHolder from './components/CardHolder';
import StateExample from './hooks/StateExample';

export default function App() {
  return (
    <div>
      <h1>React Drive Thru!</h1>
      <p>Start Plating Around to see some magic happen :)</p>

      <CardHolder title={'useState Blitz'}>
        <StateExample />
      </CardHolder>
    </div>
  );
}

import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
      <div style={{ padding: '2rem' }}>
        <h1>React 1단계: props & state 연습</h1>
        <Counter title="카운터 #1" />
        <Counter title="카운터 #2" />
      </div>
  );
}

export default App;
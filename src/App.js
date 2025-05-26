import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  /* Counter 컴포넌트
  return (
      <div style={{ padding: '2rem' }}>
        <h1>React 1단계: props & state 연습</h1>
        <Counter title="카운터 #1" />
        <Counter title="카운터 #2" />
      </div>
  );*/
  return (
      <div style={{ padding: '2rem' }}>
        <h1>React 2단계: 조건부 & 리스트 렌더링</h1>
        <Counter title="카운터 연습" />
        <TodoList />
      </div>
  );
}

export default App;
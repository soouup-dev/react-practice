import React, {useState} from 'react';

function Counter({title}) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
      <div style={{border: '1px solid gray', padding: '1rem', margin: '1rem'}}>
        <h2>{title}</h2>
        <p>현재 카운트: {count}</p>
        <button onClick={handleClick}>+1 증가</button>
      </div>
  );
}

export default Counter;
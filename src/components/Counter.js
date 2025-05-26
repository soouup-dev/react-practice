import React, {useState} from 'react';

function Counter({title}) {
  const [count, setCount] = useState(0);
  // [count, setCount] : 배열 구조 분해 할당
  // count : 현재 상태 값
  // setCount : 상태를 변경하는 함수
  // const [상태값, 상태변경함수] = useState(초기값);

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
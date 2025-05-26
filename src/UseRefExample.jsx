import React, { useRef, useState } from 'react';

const UseRefExample = () => {
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  const focusInput = () => {
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={handleChange}
        placeholder="Type something"
      />
      <button onClick={focusInput}>Focus Input (no re-render)</button>
    </div>
  );
};

export default UseRefExample;

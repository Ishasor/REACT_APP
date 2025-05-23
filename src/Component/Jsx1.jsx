import React from 'react';

const jsx1 = () => {
  const explanation = 'JSX allows you to write HTML elements in JavaScript and place them in the DOM without using functions like createElement() or appendChild().';
  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>{explanation}</p>
    </div>
  );
};

export default jsx1;

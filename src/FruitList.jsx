import React from 'react';

const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;

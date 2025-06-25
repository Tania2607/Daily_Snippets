import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");
  const [car, setCar] = useState("Toyota");

  const handleChange = () => {
    setColor("red");
  };

  const changeCar = () => {
    setCar("Maruti");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <h1 style={{ color: color }}>The color is {color}</h1>
      <button onClick={handleChange}>Change Color</button>

      <h1>My Car is {car}</h1>
      <button onClick={changeCar}>Change Car</button>
    </>
  );
}

export default Counter;

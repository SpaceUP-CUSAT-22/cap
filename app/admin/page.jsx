"use client";
import React from 'react';

const Home = () => {
  const [count, setCount] = React.useState(0);

  const handleCount = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div onClick={handleCount} className='w-full flex-center flex-col'>
      Home
    </div>
  );
};

export default Home;

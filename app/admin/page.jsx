"use client";
import React from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";


const Home = () => {
  const [count, setCount] = React.useState(0);
  const { data: session } = useSession();



  React.useEffect(() => {
    if(session?.user.type == "user"){
      window.location.replace('/cap')
    }
  }, [session])


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

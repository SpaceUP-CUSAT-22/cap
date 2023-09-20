"use client";
import React from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import AddTask from './add-task/page';


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
    <div onClick={handleCount}>
      <AddTask />
    </div>
  );
};

export default Home;

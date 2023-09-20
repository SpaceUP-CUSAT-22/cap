"use client";
import React from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import ViewTasks from './view-tasks/page';


const Home = () => {
  const [count, setCount] = React.useState(0);
  const { data: session } = useSession();



  React.useEffect(() => {
    if(session?.user.type == "admin"){
      window.location.replace('/admin')
    }
  }, [session])


  const handleCount = () => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div onClick={handleCount}>
      <ViewTasks />
    </div>
  );
};

export default Home;

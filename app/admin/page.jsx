"use client";
import React from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import AddTask from './add-task/page';
import {useRouter} from "@node_modules/next/navigation";


const Home = () => {
  const router = useRouter()
  const [count, setCount] = React.useState(0);
  const { data: session } = useSession();



  React.useEffect(() => {
    if(session?.user.type == "user"){
      router.push('/')
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

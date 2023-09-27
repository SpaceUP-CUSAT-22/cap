"use client";

import { useSession } from "next-auth/react";
import Profile from "@components/Profile";
import { SessionProvider } from "next-auth/react";
import Nav from "@components/Nav";

const MyProfile = () => {
  const { data: session } = useSession();
  return <>
    {/*<SessionProvider user={ session?.user}>*/}
      <Nav />
      <Profile user=""/>
    {/*</SessionProvider>*/}
  </>;
};

export default MyProfile;

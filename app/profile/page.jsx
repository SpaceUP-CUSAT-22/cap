"use client";

import { useSession } from "next-auth/react";
import Profile from "@components/Profile";
import { SessionProvider } from "next-auth/react";

const MyProfile = () => {
  const { data: session } = useSession();

  return <>
    {/*<SessionProvider user={ session?.user}>*/}
      <Profile />
    {/*</SessionProvider>*/}
  </>;
};

export default MyProfile;
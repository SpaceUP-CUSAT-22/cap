"use client";

import { useSession } from "next-auth/react";
import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();

  return <Profile user={ session?.user} />;
};

export default MyProfile;
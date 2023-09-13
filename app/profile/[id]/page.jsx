"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  // const userName = searchParams.get("name");

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${params?.id}`);
      const data = await response.json();

      setUser(data);
    };

    if (params?.id) fetchUser();
  }, [params.id]);

  return (
    <Profile
      user={user}
    />
  );
};

export default UserProfile;

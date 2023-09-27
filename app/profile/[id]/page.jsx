"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

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
    <>
      <Nav />
      <Profile
        user={user}
      />
      <Footer />
    </>
  );
};

export default UserProfile;

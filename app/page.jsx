"use client"
import Timeline from "@components/Timeline";
import React, { useEffect } from "react";
import Footer from "@components/Footer";
import Eligibility from "@components/Eligibility";
import Card from "@components/Card";
import Provider from "@components/Provider";
import Nav from "@components/Nav";
import MoreDetails from "@components/MoreDetails";
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Landing from "@components/Landing";
import Loader from "@components/Loader/Loader";
import JoinNow from "@components/JoinNow";
import About from "@components/About";
import AOS from "aos";
import "aos/dist/aos.css";



const Home = () => {
  const { data: session } = useSession()
  const [phone, setPhone] = React.useState(true)

  const [loaderText, setLoaderText] = React.useState("スペースアップキューサット")
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    AOS.init();
    const fetchUsers = async () => {
      try {
        if (session) {
          const res = await axios.get(`/api/users/${session.user?.id}`)
          console.log(res.data?.phone)
          if (res.data && (res.data?.phone == "" || res.data?.phone == 0)) {
            setPhone(false)
          } else {
            console.log(res.data.phone)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchUsers()
  }, [session])

  useEffect(() => {
    setTimeout(() => {
      setLoaderText("SPACE UP CUSAT")
    }, 4750);

    setTimeout(() => {
      setIsLoading(false);
    }, [8000])
  }, []);

  if(isLoading) {
    return (
<Loader text={loaderText} />
    )
  }

  return (
    <Provider>
      {phone ?
        <>
          <Nav />
          <Landing />
          <Timeline />
          <Card />
          <Eligibility />
          <JoinNow />
          <About />
          <Footer />
        </>
        :
        <>
          <Nav />
            <MoreDetails setPhone={setPhone} />
          <Footer />
        </>
        }
    </Provider>
  )
};

export default Home;

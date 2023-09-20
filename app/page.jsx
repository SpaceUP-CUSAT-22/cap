"use client"
// import Timeline from "@components/Timeline";
import React from "react";
import Footer from "@components/Footer";
import Eligibility from "@components/Eligibility";
import Card from "@components/Card";
import Provider from "@components/Provider";
import Nav from "@components/Nav";
import MoreDetails from "@components/MoreDetails";
import { useSession } from 'next-auth/react'
import axios from 'axios'
import Landing from "@components/Landing";


const Home = () => {
  const { data: session } = useSession()
  const [phone, setPhone] = React.useState(true)
  React.useEffect(() => {
    console.log(session)
    const fetchUsers = async() => {
      try {
        if(session){
          const res = await axios.get(`/api/users/${session.user?.id}`)
          if(res.data && res.data.phone){
            setPhone(false)
          }else{
            console.log(res.data.phone)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  
    fetchUsers()
  }, [session])
  return(
    <Provider>
      {phone ? 
        <>
          <Nav />
          <Landing />
          {/* <Timeline /> */}
          <Card />
          <Eligibility />
          
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

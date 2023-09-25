"use client"
import Timeline from "@components/Timeline";
import React, {useEffect} from "react";
import Footer from "@components/Footer";
import Eligibility from "@components/Eligibility";
import Card from "@components/Card";
import Nav from "@components/Nav";
import MoreDetails from "@components/MoreDetails";
import {useSession} from 'next-auth/react'
import axios from 'axios'
import Landing from "@components/Landing";
import Loader from "@components/Loader/Loader";
import JoinNow from "@components/JoinNow";
import About from "@components/About";
import "aos/dist/aos.css";


const Home = () => {
    const {data: session} = useSession()

    const [loaderText, setLoaderText] = React.useState("スペースアップキューサット")
    const [isLoading, setIsLoading] = React.useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoaderText("SPACE UP CUSAT")
        }, 4750);

        setTimeout(() => {
            setIsLoading(false);
        }, [8000])
    }, [session]);

    if (isLoading) {
        return (
            <Loader text={loaderText}/>
        )
    }

    return (
        <>
            {session?.user?.phone || !session ?
                <>
                    <Nav/>
                    <Landing/>
                    <Timeline/>
                    <Card/>
                    <Eligibility/>
                    <JoinNow/>
                    <About/>
                    <Footer/>
                </>
                :
                <>
                    <Nav/>
                    <MoreDetails/>
                    <Footer/>
                </>
            }
        </>
    )
};

export default Home;

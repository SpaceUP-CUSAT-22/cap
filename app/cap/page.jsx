"use client";
import React, {Fragment, useEffect, useState} from 'react';
import {signIn, signOut, useSession, getProviders} from "next-auth/react";
import Image from "@node_modules/next/image";
import Tasks from "@/components/Dashboard/User/Tasks";
import Referrals from "@/components/Dashboard/User/Referrals";
import {useRouter} from "@node_modules/next/navigation";



const Home = () => {
    const router = useRouter()
    const [count, setCount] = React.useState(0);
    const {data: session} = useSession();

    const [active, setActive] = React.useState("tasks")
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    const [user, setUser] = useState(null)

    React.useEffect(() => {
        if (window.innerWidth < 640)
            setIsMobile(true);

        console.log(session?.user)
        if (session?.user?.type == "admin") {
            router.push('/admin')
        }

        if(!session){
            router.push('/')
        }
    }, [session])


    const handleCount = () => {
        setCount(count + 1)
        console.log(count)
    }

    return (
        <Fragment>

            {isMobile &&
                <div className="flex h-screen flex-col justify-center items-center m-5 mb-56">
                    <div className="flex flex-col justify-center items-center mt-56">
                        <div className={"bg-[#272727] rounded-full p-3 m-2"}>
                            <Image
                                src={session?.user.image}
                                width={100}
                                height={100}
                                className='rounded-full'
                                alt='profile'
                            />
                        </div>
                        <p className="text-white font-bold py-1">{session?.user?.name}</p>
                        <p className="text-gray-400 py-1">{session?.user?.email}</p>
                        <div className="bg-gray-500 rounded-2xl px-2 text-white py-1 mb-5 ">
                            {session?.user?.points} Points
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#151515] w-full rounded-2xl m-6">
                        <div id="top" className="flex flex-row  items-center w-full">
                            <div onClick={() => setActive("tasks")}
                                 className={`${active === "tasks" ? "bg-gray-800" : ""} text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-gray-800 ease-in-out`}>
                                Tasks
                            </div>

                            <div onClick={() => setActive("referrals")}
                                 className={`${active === "referrals" ? "bg-gray-800" : ""} text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-gray-800 ease-in-out`}>
                                Referrals
                            </div>

                            <div onClick={() => {
                                signOut({callbackUrl: '/'})
                            }}
                                 className="text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-red-900 ease-in-out">
                                Logout
                            </div>
                        </div>

                        <div id="left" className="">
                            {active === "tasks" ? <Tasks isMobile={isMobile} session={session}/> : <Referrals isMobile={isMobile} user={session?.user}/>}
                        </div>

                    </div>
                </div>
            }


            {!isMobile &&
                <div className="flex h-screen ">
                    <div className="flex m-auto bg-[#151515] w-full rounded-2xl p-10 mx-[10vmax]">
                        <div id="right" className="flex flex-col  items-center px-1 w-1/4">
                            <div className={"bg-[#272727] rounded-full p-2 m-2"}>
                                <Image
                                    src={session?.user.image}
                                    width={100}
                                    height={100}
                                    className='rounded-full'
                                    alt='profile'
                                />
                            </div>
                            <p className="text-white font-bold py-1">{session?.user?.name}</p>
                            <p className="text-gray-400 py-1 mx-2">{session?.user?.email}</p>
                            <div className="bg-gray-500 rounded-2xl px-2 text-white py-1 mb-5 ">
                                {session?.user?.points} Points
                            </div>

                            <div onClick={() => setActive("tasks")}
                                 className={`${active === "tasks" ? "bg-gray-800" : ""} text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-gray-800 ease-in-out`}>
                                Tasks
                            </div>

                            <div onClick={() => setActive("referrals")}
                                 className={`${active === "referrals" ? "bg-gray-800" : ""} text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-gray-800 ease-in-out`}>
                                Referrals
                            </div>

                            <div onClick={() => {
                                signOut({callbackUrl: '/'})
                            }}
                                 className="text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-red-900 ease-in-out">
                                Logout
                            </div>
                        </div>

                        <div className="border border-gray-500"></div>

                        <div id="left" className="w-3/4 p-5 ">
                            {active === "tasks" ? <Tasks session={session}/> : <Referrals user={session?.user}/>}
                        </div>

                    </div>
                </div>}
        </Fragment>);
};

export default Home;

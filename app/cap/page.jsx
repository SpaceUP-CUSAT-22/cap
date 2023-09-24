"use client";
import React, {Fragment, useState} from 'react';
import {signIn, signOut, useSession, getProviders} from "next-auth/react";
import Image from "@node_modules/next/image";
import Tasks from "@/components/Dashboard/User/Tasks";
import Referrals from "@/components/Dashboard/User/Referrals";


const Home = () => {
    const [count, setCount] = React.useState(0);
    const {data: session} = useSession();

    const [active, setActive] = React.useState("tasks")
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)


    React.useEffect(() => {
        if (window.innerWidth < 640)
            setIsMobile(true);

        if (session?.user.type == "admin") {
            window.location.replace('/admin')
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
                            <Image src={"/assets/icons/phone.png"}
                                   alt={"phone"}
                                   width={100}
                                   height={100}
                            />
                        </div>
                        <p className="text-white font-bold py-1">Nayan Prasad P K</p>
                        <p className="text-gray-400 py-1">nayanfapfasfd@gami.ocm</p>
                        <div className="bg-gray-500 rounded-2xl px-2 text-white py-1 mb-5 ">
                            0 Points
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

                            <div onClick={() => console.log("logout")}
                                 className="text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-red-900 ease-in-out">
                                Logout
                            </div>
                        </div>

                        <div id="left" className="">
                            {active === "tasks" ? <Tasks isMobile={isMobile}/> : <Referrals/>}
                        </div>

                    </div>
                </div>
            }


            {!isMobile &&
                <div className="flex h-screen ">
                <div className="flex m-auto bg-[#151515] w-full rounded-2xl p-10 mx-[10vmax]">
                <div id="right" className="flex flex-col  items-center px-1 w-1/4">
                    <div className={"bg-[#272727] rounded-full p-3 m-2"}>
                        <Image src={"/assets/icons/phone.png"}
                               alt={"phone"}
                               width={100}
                               height={100}
                        />
                    </div>
                    <p className="text-white font-bold py-1">Nayan Prasad P K</p>
                    <p className="text-gray-400 py-1">nayanfapfasfd@gami.ocm</p>
                    <div className="bg-gray-500 rounded-2xl px-2 text-white py-1 mb-5 ">
                        0 Points
                    </div>

                    <div onClick={() => setActive("tasks")}
                         className={`${active === "tasks" ? "bg-gray-800" : ""} text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-gray-800 ease-in-out`}>
                        Tasks
                    </div>

                    <div onClick={() => setActive("referrals")}
                         className={`${active === "referrals" ? "bg-gray-800" : ""} text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-gray-800 ease-in-out`}>
                        Referrals
                    </div>

                    <div onClick={() => console.log("logout")}
                         className="text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-red-900 ease-in-out">
                        Logout
                    </div>
                </div>

                <div className="border border-gray-500"></div>

                <div id="left" className="w-3/4 p-5 ">
                    {active === "tasks" ? <Tasks/> : <Referrals/>}
                </div>

            </div>
                </div>}
    </Fragment>);
};

export default Home;

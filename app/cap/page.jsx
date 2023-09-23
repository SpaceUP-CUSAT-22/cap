"use client";
import React, {Fragment} from 'react';
import {signIn, signOut, useSession, getProviders} from "next-auth/react";
import ViewTasks from './view-tasks/page';
import Image from "@node_modules/next/image";
import {red} from "@node_modules/@mui/material/colors";


const Home = () => {
    const [count, setCount] = React.useState(0);
    const {data: session} = useSession();

    const [active, setActive] = React.useState("tasks")


    React.useEffect(() => {
        if (session?.user.type == "admin") {
            window.location.replace('/admin')
        }
    }, [session])


    const handleCount = () => {
        setCount(count + 1)
        console.log(count)
    }

    return (<Fragment>
            <div className="flex h-screen">
                <div className="flex m-auto bg-[#151515] w-1/3  rounded-2xl p-10">
                    <div id="right" className="flex flex-col  items-center px-10 w-full">
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
                            className={`${active === "tasks" ? "bg-gray-600" : ""} text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-gray-800 ease-in-out`}>
                            Tasks
                        </div>

                        <div onClick={() => setActive("referrals")}
                             className={`${active === "referrals" ? "bg-gray-600" : ""} text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-gray-800 ease-in-out`}>
                            Referrals
                        </div>

                        <div onClick={() => setActive("logout")}
                            className="text-white p-3 w-full rounded-[10px] cursor-pointer m-2 hover:bg-red-900 ease-in-out">
                            Logout
                        </div>

                    </div>


                    <div id="left" className="bg-red-700">
                        left
                    </div>
                </div>
            </div>
        </Fragment>);
};

export default Home;

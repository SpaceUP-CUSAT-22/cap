"use client";

import React from 'react'
import {useEffect, useState} from "react";
import {signIn, signOut, useSession, getProviders} from "next-auth/react";
import Image from 'next/image';
import space from "../public/assets/images/space suit.png";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Landing = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    const handleDashboardClick = () => {
        if (session?.user.type == "admin")
            router.push('/admin')
        else
            router.push('/cap')
    }


    return (
        <div className='flex md:flex-row flex-col h-full w-full'>
            <div className='w-screen w-full md:w-1/2 h-screen flex flex-col justify-center pl-12 sm:pl-12 md:pl-36'>
                <h2 className="text-white font-black md:text-[60px] sm:text-[60px] text-[45px]"
                    style={{fontFamily: 'Satisfy'}}
                >
                    Campus Ambassador
                </h2>
                <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
                    Be the Messiah for <span className='text-red-700 font-bold'>Space Up </span><br
                    className='sm:block hidden'/>
                </p>
                {!session?.user ? (
                        <>
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <button
                                        type='button'
                                        key={provider.name}
                                        onClick={() => {
                                            signIn(provider.id);
                                        }}
                                        className=' w-32 py-2 mt-4 bg-primary font-medium text-[16px] text-white border border-white hover:bg-white hover:text-primary transition duration-300 ease-in-out rounded rounded-3xl'
                                    >
                                        Sign in
                                    </button>

                                ))}
                        </>
                    ) :
                        <button onClick={handleDashboardClick}
                            type='button'

                            className=' w-32 py-2 mt-4 bg-primary font-medium text-[16px] text-white border border-white hover:bg-white hover:text-primary transition duration-300 ease-in-out rounded rounded-3xl'
                        >
                            Dashboard
                        </button>

                }
            </div>

            <div
                className='w-full z-[-1] md:w-1/2 flex justify-center items-center top-[25%] md:top-0 md:right-0 absolute md:relative'>
                <Image src={space} alt='landing' width={500} height={500}
                       className=' floating items-center static md:top-[10px] md:top-[0]' />
            </div>
        </div>
    )
}

export default Landing

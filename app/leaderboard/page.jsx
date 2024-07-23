"use client"
import React from 'react';
import Image from "next/image";
import { useSession } from 'next-auth/react'
import Link from "next/link";
import axios from 'axios';


const Row = ({ id, name, points }) => {
    const { data: session } = useSession()
    return (
        <div className={`flex justify-between ${(session && session.user.id == id) ? 'bg-red-800' : 'bg-zinc-800'} my-10 rounded-[15px] py-10 px-10`}>
            <h3 className='text-white text-xl font-bold'>{name}</h3>
            <h3 className='text-white text-xl font-bold'>{points}</h3>
        </div>
    );
};

const Page = () => {
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        const fetchAll = async() => {
            try{
                const res = await axios.get('https://cap.spaceupcusat.org/api/users')
                console.log('All data: ', res.data)
            }catch(err){
                console.log(err)
            }
        }
        const fetchTop = async() => {
            try{
                const res = await axios.get('/api/users/top')
                setUsers(res.data)
                console.log(res)
            }catch(err){
                console.log(err)
            }
        }
        fetchTop()
        fetchAll()
    }, [])
    return (
        <div className="h-screen">
            {/* <div className="flex items-center text-center justify-center m-auto bg-[#151515] w-1/3  rounded-2xl px-40 py-20 md:p-10">
                <h1 className="text-white font-bold text-4xl">Coming soon</h1>
            </div> */}
            <h1 className='text-white text-3xl text-center font-bold mt-40 mb-0'>Leaderboard</h1>
            <div className='px-20 py-10 grid'>
                {/* <div className='flex justify-between my-10 rounded-[15px]'>
                    <h3 className='text-white text-xl font-bold'>Name</h3>
                    <h3 className='text-white text-xl font-bold'>Points</h3>
                </div> */}
                {users && users.map(user => user.type == "user" && <Row id={user._id} name={user.name} points={user.points} />)}
            </div>
        </div>
    );
};

export default Page;

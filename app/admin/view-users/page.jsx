"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const ViewUsers = () => {


    const [users, setUsers] = React.useState([])
    useEffect(() => {
        const fetchAll = async() => {
            const res = await axios.get('/api/users')
            if(res){
                setUsers(res.data)
                console.log(res.data)
            }
        }

        fetchAll()
    }, []);

    return (
        <div className="w-full mx-auto px-10 py-10">
            <h2 className="text-2xl font-semibold mb-4">View Users</h2>
            <div className='my-10'>
                {users && users.map(user => 
                <div className='my-10 bg-gray-500 px-10 py-10 rounded-[20px]'>
                    <h3>{user.name}</h3>
                    <h3>{user.phone}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.year}</h3>

<h3>{user.uni}</h3>                    <h3>{user.branch}</h3>
                    <h3>{user.yog}</h3>
                </div>
                )}
            </div>
        </div>
    )
}
export default ViewUsers

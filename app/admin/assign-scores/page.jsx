"use client"
import React, {Fragment} from 'react'
import axios from 'axios'
import Image from 'next/image'
import {useSession} from 'next-auth/react'
import { getStorage, ref, listAll } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyEFaYIN_0ZtNxnIJ88VCe4rlBQOoFG7k",
  authDomain: "spaceup-6bc5a.firebaseapp.com",
  projectId: "spaceup-6bc5a",
  storageBucket: "spaceup-6bc5a.appspot.com",
  messagingSenderId: "749448016269",
  appId: "1:749448016269:web:f60222fb75ae7972de8dc4",
  measurementId: "G-QR35V6EVM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

// Create a reference to the root of your Firebase storage bucket.


const AssignScores = () => {
    const {data: session} = useSession()
    const [tasks, setTasks] = React.useState([])
    const [points, setPoints] = React.useState(0)
    const [users, setUsers] = React.useState([])


    React.useEffect(() => {
        // console.log('triggered')
        // console.log(session)
        if (session) {
            // console.log('triggered1')
            // console.log(session)
        }
    }, [session, tasks])


    React.useEffect(() => {
        const fetchImages = () => {
            // const storageRef = ref(storage, '65142c8f664366ed9e1ce306/');
            const listRef = ref(storage, 'images/');

            // Find all the prefixes and items.
            listAll(listRef)
            .then((res) => {
                res.prefixes.forEach((folderRef) => {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
                });
                res.items.forEach((itemRef) => {
                // All the items under listRef.
                });
            }).catch((error) => {
                // Uh-oh, an error occurred!
            });
        }
        const fetchTasks = async () => {
            try {
                const res = await axios.get('/api/admin/tasks')
                setTasks(res.data)
                console.log(tasks)
            } catch (err) {
                console.log(err)
            }
        }

        const fetchUsers = async () => {
            try {
                const res = await axios.get('/api/users')
                setUsers(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUsers()
        fetchTasks()
        fetchImages()
    }, [])

    const handleSubmit = async (id) => {
        try {
            const res = await axios.post('/api/admin/points', {points, id})
            if (res) {
                window.location.reload()
            }
        } catch (err) {
            console.log(err)
        }
    }

    const fetchUser = async (id) => {
        try {
            const res = await axios.get(`/api/users/${id}`)
            console.log(res.data)
            return res.data
        }
        catch (err) {
            console.log(err)
        }
    }

    if (tasks && tasks.length <= 0) {
        return (
            <h1 className='text-center text-4xl text-black'>No tasks been submitted yet!</h1>
        )
    }


    return (
        <Fragment>
            {users && tasks && tasks.map((task) => (
                <div className='bg-slate-100 shadow-lg rounded-[20px] px-5 py-5'>
                    <div className="flex justify-between">
                        <h1 className="text-xl font-bold">{task.name}</h1>
                        <h3 className='text-lg font-bold'><b>Exp Date:</b> {task.expirationDate}</h3>
                    </div>
                    <div className="my-10">
                        <p>{task.description}</p>
                        <Image src={task.attachment} width="350" height="300" alt="image" className='my-5' />
                    </div>
                    <div className='my-10'>
                        <h1 className='text-3xl font-bold my-5'>Submissions</h1>
                        <div className='grid grid-cols-3 gap-5 my-10'>
                        </div>
                        {task.attachments && task.attachments.map((attachment) => (
                            <div className='bg-slate-200 shadow-lg rounded-[20px] px-5 py-5'>
                                <div className="flex justify-between">
                                    <h1 className="text-xl font-bold">{attachment.name}</h1>
                                    <h3 className='text-lg font-bold'><b>Exp Date:</b> {attachment.expirationDate}</h3>
                                </div>
                                <div className="my-10">
                                    <p>{users.find(u => u._id == attachment.id)?.name}</p>
                                    <p>{users.find(u => u._id == attachment.id)?.email}</p>
                                    <p>{users.find(u => u._id == attachment.id)?.phone}</p>
                                    <p>{attachment.description}</p>
                                    {/* <Image src={attachment.attachment} width="350" height="300" alt="image" className='my-5' /> */}
                                </div>
                                <div className='my-10 flex jusify-around'>
                                    <input type="text" name="" onChange={(e) => setPoints(e.target.value)} placeholder="Enter points"  id="" />
                                    <button onClick={() => handleSubmit(attachment.id)}>Submit</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </Fragment>
)}


export default AssignScores

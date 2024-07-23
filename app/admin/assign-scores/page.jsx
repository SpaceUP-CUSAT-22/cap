"use client"
import React, {Fragment} from 'react'
import axios from 'axios'
import Image from 'next/image'
import {useSession} from 'next-auth/react'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

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

    const [allImageUrls, setImageUrls] = React.useState([])


    React.useEffect(() => {
        
        const fetchTasks = async () => {
            try {
                const res = await axios.get('/api/admin/tasks')
                setTasks(res.data)
                console.log(tasks)
            } catch (err) {
                console.log(err)
            }
        }

        async function getImageUrlMaps(users) {
            // Create an array to store the image URL maps for each user.id.
            const imageUrls = [];
          
            // Iterate over each user and get the folder reference in Firebase storage.
            for (const user of users) {
              const folderRef = ref(storage, user._id);
          
              const res = await listAll(folderRef);
          
              // Create an object with the `id` and `img_urls` array.
              const imageUrlMap = {
                id: user._id,
                img_urls: [],
              };
          
              // For each file, get the file's download URL and add it to the `img_urls` array.
              for (const itemRef of res.items) {
                imageUrlMap.img_urls.push(await getDownloadURL(itemRef));
              }
          
              // Add the object to the `imageUrls` array.
              imageUrls.push(imageUrlMap);
            }
          
            // Return the `imageUrls` array.
            setImageUrls(imageUrls);
          }

        const fetchUsers = async () => {
            try {
                const res = await axios.get('/api/users')
                setUsers(res.data)
                console.log(res.data)
                getImageUrlMaps(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUsers()
        fetchTasks()
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
            {users && tasks && tasks.map((task,i) => (
                <div key={i} className='bg-slate-100 shadow-lg rounded-[20px] px-5 py-5'>
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
                                    <Image src={allImageUrls.find(a => a.id == attachment.id)?.img_urls.find(i => i.includes(task._id)) || ''} width="350" height="300" alt="image" className='my-5' />
                                </div>
                                <div className='my-10 flex jusify-around'>
                                    <input type="text" name="" onChange={(e) => setPoints(e.target.value)} placeholder="Enter points"  id="" />
                                    <button className='px-3 py-2 text-white hover:bg-blue-600 bg-blue-500 rounded ml-3' onClick={() => handleSubmit(attachment.id)}>Submit</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </Fragment>
)}


export default AssignScores

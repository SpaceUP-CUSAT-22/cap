"use client"
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const AssignScores = () => {
  const { data: session } = useSession()
  const [tasks, setTasks] = React.useState([])
  const [points, setPoints] = React.useState(0)
  const [users, setUsers] = React.useState([])


  React.useEffect(() => {
    console.log('triggered')
    console.log(session)
    if(session){
      console.log('triggered1')
      console.log(session)
    }
  }, [session])

  React.useEffect(() => {
    const fetchTasks = async() => {
      try{
        const res = await axios.get('/api/admin/tasks')
        setTasks(res.data)
        console.log(res.data)
      }catch(err){
        console.log(err)
      }
    }

    const fetchUsers = async() => {
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
  }, [])

  const handleSubmit = async(id) => {
    try{
      const res = await axios.post('/api/admin/points', {points, id})
      if(res){
        window.location.reload()
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='grid grid-cols-1 px-10 py-10'>
        {tasks && session?.user.id && tasks.map(task => 
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
                  {task.attachments?.map(data =>
                      <div className='mr-10'>
                          <h3 className='text-lg font-bold'>{users.find(user => user._id == data.id)?.name}</h3>
                          <Image src={data.attachment} width="200" height="200" alt="image" className='my-5' />
                          <div className='flex'>
                              <input onChange={(e) => setPoints(e.target.value)} type="number" className='pl-3 py-3 rounded-[15px] border-1 mr-3' name="" placeholder="Enter points" id="" />
                              <button onClick={() => handleSubmit(data.id)} className='bg-green-500 text-white rounded-[15px] px-5 py-3'>Submit</button>
                          </div>
                      </div>
                  )}
                </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default AssignScores
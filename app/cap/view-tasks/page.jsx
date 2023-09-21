"use client"
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const ViewTasks = () => {
  const { data: session } = useSession()
  const [tasks, setTasks] = React.useState([])
  const [fileData, setFileData] = React.useState()

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

    fetchTasks()
  }, [])

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
        return;
    }

    const allowedFileTypes = ['image/jpeg', 'image/png', 'video/mp4', 'application/pdf'];
    if (!allowedFileTypes.includes(file.type)) {
        setFileError('File type not supported. Please select an image, video, or PDF.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
        const base64Data = event.target.result;
        setFileData(base64Data);
    };
    reader.readAsDataURL(file);
};

  const handleSubmit = async(task) => {
    try{
      if(!fileData){
        window.alert('Please upload a file')
        return
      }
      const res = await axios.post('/api/users/task', {task, session, fileData})
      if(res){
        window.location.reload()
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='grid grid-cols-1 px-10 py-10'>
        {(tasks && tasks.length > 0 && session?.user.id)? tasks.map(task => 
          <div className='mb-10 bg-slate-100 shadow-lg rounded-[20px] px-5 py-5'>
            <div className="flex justify-between">
                <h1 className="text-xl font-bold">{task.name}</h1>
                <h3 className='text-lg font-bold'><b>Exp Date:</b> {new Date(task.expirationDate).toLocaleDateString('en-GB')}</h3>
            </div>
            <div className="my-10">
                <p>{task.description}</p>
                <Image src={task.attachment} width="350" height="300" alt="image" className='my-5' />
            </div>
            <div className="flex">
              {task.completed?.includes(session.user.id) ? 
              <>
                <button className='bg-green-500 text-white rounded-[15px] px-5 py-3'>Submitted</button>
              </>  
              : 
              <>
                <input
                onChange={handleFileChange}
                accept=".jpeg, .jpg, .png, .mp4, .pdf" 
                type="file" name="" id="" className='mr-3' />
                <button onClick={() => handleSubmit(task)} className='bg-green-500 hover:bg-green-800 text-white rounded-[15px] px-5 py-3'>Submit</button>
              </>  
              }
            </div>
        </div>
      ) : <h1 className='text-center text-4xl text-black'>No tasks found!</h1>}
    </div>
  )
}

export default ViewTasks
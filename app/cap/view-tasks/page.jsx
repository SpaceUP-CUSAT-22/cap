"use client"
import React from 'react'
import axios from 'axios'

const ViewTasks = () => {

  const [tasks, setTasks] = React.useState([])

  React.useEffect(async() => {
    const res = await axios.get('/api/admin/tasks')
    console.log(res)
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
        <div className='bg-slate-100 shadow-lg rounded-[20px] px-5 py-5'>
            <div className="flex justify-between">
                <h1 className="text-xl font-bold">Task1</h1>
                <h3 className='text-lg font-bold'><b>Exp Date:</b> 29/10/2023</h3>
            </div>
            <div className="my-10">
                <p>Random description</p>
            </div>
            <div className="flex">
              <input type="file" name="" id="" className='mr-3' />
              <button className='bg-green-500 hover:bg-green-800 text-white rounded-[15px] px-5 py-3'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ViewTasks
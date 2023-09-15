"use client";

import React from 'react'
import axios from 'axios'

const AddAdmin = () => {
    const [formData, setFormData] = React.useState({ email: '', type: '' });
  const [responseMessage, setResponseMessage] = React.useState('');

  const handleInputChange = (e) => {
    const {  name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/add', formData);

      if (response.status === 200) {
        // Request was successful, handle the response as needed
        setResponseMessage('User updated successfully');
      } else {
        // Handle other status codes or errors here
        setResponseMessage('Failed to update user');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setResponseMessage('An error occurred');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className='flex m-auto pl-5 py-3 border-2'
            placeholder='Enter email'
            required
          />
        </div>
        <button type="submit" className='text-white bg-green-500 flex m-auto rounded-[5px] px-5 py-3 text-center my-5'>Update User</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
export default AddAdmin

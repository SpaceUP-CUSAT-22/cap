import Link from "next/link";
import React from "react";
import axios from 'axios'
import { useSession } from 'next-auth/react'

const MoreDetails = ({setPhone}) => {
    const { data: session } = useSession()
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        uni: '',
        branch: '',
        yog: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(id) => {
        try {
            console.log(formData)
            const res = await axios.post('/api/users', {formData, id})
            if(res){
                setPhone(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="my-32">
            <div className="flex flex-col justify-center">
                <h1 className="text-center text-white text-3xl font-bold">Enter more details</h1>
                <input name="name" onChange={handleInputChange} className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 w-[50%] my-5" placeholder="Name" type="text" id="" />
                <input name="phone" onChange={handleInputChange} className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 w-[50%] my-5" placeholder="Phone number" type="text" id="" />
                <input name="uni" onChange={handleInputChange} className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 w-[50%] my-5" placeholder="College/University Name" type="text" id="" />
                <input name="branch" onChange={handleInputChange} className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 w-[50%] my-5" placeholder="Branch" type="text" id="" />
                <input name="yog" onChange={handleInputChange} className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 w-[50%] my-5" placeholder="Year of graduation" type="number" id="" />
                <button onClick={() => handleSubmit(session.user.id)} className="bg-violet-500 hover:bg-violet-800 w-[30%] m-auto text-white rounded-[15px] my-10 px-5 py-3">Continue</button>
            </div>
        </div>
    );
};

export default MoreDetails;
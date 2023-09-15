"use client"
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react'
import {useRouter} from 'next/navigation';

const AddTask = () => {

    const { data: session } = useSession()
    const router = useRouter();

    const [formData, setFormData] = useState({
        creator: '',
        name: '',
        description: '',
        attachment: '',
        expirationDate: '',
        points: '',
    });


    const [fileError, setFileError] = useState('');
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (session?.user) {
            setFormData({
                ...formData,
                creator: session.user.id,
            });
        }
    }, [session]);

    // Function to handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }

        // Check if the selected file type is allowed (image, video, PDF)
        const allowedFileTypes = ['image/jpeg', 'image/png', 'video/mp4', 'application/pdf'];
        if (!allowedFileTypes.includes(file.type)) {
            setFileError('File type not supported. Please select an image, video, or PDF.');
            return;
        }

        setFileError('');

        // Read the file as base64
        const reader = new FileReader();
        reader.onload = (event) => {
            const base64Data = event.target.result;
            setFormData({
                ...formData,
                attachment: base64Data,
            });
        };
        reader.readAsDataURL(file);
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform client-side validation
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required.';
        }
        if (!formData.description.trim()) {
            errors.description = 'Description is required.';
        }
        if (!formData.points || formData.points < 1) {
            errors.points = 'Points must be greater than 0.';
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        if (!formData.attachment) {
            setFileError('Attachment is required.');
            return;
        }

        setFormErrors({});
        setFileError('');

        try {
            const response = await fetch(`/api/tasks`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Task added successfully!');
                setFormData({
                    ...formData,
                    name: '',
                    description: '',
                    attachment: '',
                    expirationDate: '',
                    points: '',
                });
                router.push('/');
            } else {
                const { error } = await response.json();
                alert(`Failed to add task: ${error}`);
            }
        } catch (error) {
            console.error('Error adding task:', error);
            alert('Error adding task. Please try again.');
        }
    };

    return (
        <div className="w-full mx-auto px-10 py-10">
            <h2 className="text-2xl font-semibold mb-4">Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                        Task Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full border rounded-md py-2 px-3 ${
                            formErrors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter task name"
                    />
                    {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className={`w-full border rounded-md py-2 px-3 ${
                            formErrors.description ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter task description"
                        rows="4"
                    ></textarea>
                    {formErrors.description && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="attachment" className="block text-gray-700">
                        Attachment (image, video, or PDF)
                    </label>
                    <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        onChange={handleFileChange}
                        accept=".jpeg, .jpg, .png, .mp4, .pdf"
                        className="w-full border rounded-md py-2 px-3 border-gray-300"
                    />
                    {fileError && (
                        <p className="text-red-500 text-sm mt-1">{fileError}</p>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="expirationDate" className="block text-gray-700">
                        Expiration Date (optional)
                    </label>
                    <input
                        type="date"
                        id="expirationDate"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                        className="w-full border rounded-md py-2 px-3 border-gray-300"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="points" className="block text-gray-700">
                        Points
                    </label>
                    <input
                        type="number"
                        id="points"
                        name="points"
                        value={formData.points}
                        onChange={handleInputChange}
                        className={`w-full border rounded-md py-2 px-3 ${
                            formErrors.points ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter points"
                    />
                    {formErrors.points && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.points}</p>
                    )}
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    )
}
export default AddTask

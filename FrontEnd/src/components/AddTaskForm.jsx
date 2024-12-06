import React, { useState } from 'react';

function AddTaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setError('Title is required');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            });

            if (response.ok) 
            {
                setTitle('');
                setDescription('');
                setError('');
                
            } else 
            {
                setError('Failed to add task');
            }
        } 
        catch (err) 
        {
            setError('Failed to add task');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
            <h1 className='flex justify-center'>Task Manager</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {
                error && <p className="text-red-600 text-sm">{error}</p>
                }

                <button 
                    type="submit"
                    className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default AddTaskForm;

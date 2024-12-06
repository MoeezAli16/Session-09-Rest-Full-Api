import React, { useEffect, useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('http://localhost:5000/api/tasks');
            const data = await response.json();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:5000/api/tasks/${id}`,
         {
            method: 'DELETE',
        });
        if (response.ok) {
            setTasks(tasks.filter(task => task._id !== id));
        }
    };

    const handleMarkComplete = async (id) => {
        const task = tasks.find(task => task._id === id);
        const updatedTask = { ...task, status: 'Completed' };

        const response = await fetch(`http://localhost:5000/api/tasks/${id}`,
         {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTask),
        });

        if (response.ok) {
            setTasks(tasks.map(task => (task._id === id ? updatedTask : task)));
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-semibold mb-4 text-center">Task List</h2>
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task._id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
                        <p className="text-gray-600">{task.description}</p>
                        <p className="text-sm text-gray-500">Status: {task.status}</p>
                        <div className="mt-4 space-x-4">
                            <button
                                onClick={() => handleMarkComplete(task._id)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                            >
                                Mark as Complete
                            </button>
                            <button
                                onClick={() => handleDelete(task._id)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;

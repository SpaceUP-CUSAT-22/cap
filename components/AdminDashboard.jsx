"use client";
import AmbassadorTable from './AmbassadorTable';
import TaskTable from "@components/TaskTable";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AdminDashboard = () => {

    const [ambassadors, setAmbassadors] = useState([]);
    const [tasks, setTasks] = useState([]);

    const fetchAmbassadors = async () => {
        const response = await fetch("/api/users");
        const data = await response.json();

        setAmbassadors(data);
    };

    const fetchTasks = async () => {
        const response = await fetch("/api/tasks");
        const data = await response.json();

        setTasks(data);
    };

    useEffect(() => {
        fetchAmbassadors();
        fetchTasks();
    }, []);

    return (
        <div>
            <div className="flex justify-end mt-4">
                <Link
                    href="/add-task"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-4"
                >
                    Add Task
                </Link>
                <Link
                    href="/add-admin"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Add Admin
                </Link>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Ambassador</Tab>
                    <Tab>Task</Tab>
                </TabList>

                <TabPanel>
                    <h1 className="text-2xl font-semibold mt-4">Campus Ambassadors</h1>
                    {/* Ambassador table component here */}
                    <AmbassadorTable ambassadors={ambassadors} />
                </TabPanel>

                <TabPanel>
                    <h1 className="text-2xl font-semibold mt-4">Tasks</h1>
                    {/* Task table component here */}
                    <TaskTable tasks={tasks} />
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default AdminDashboard;

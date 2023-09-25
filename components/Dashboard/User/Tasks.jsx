import React, {Fragment, useEffect, useState} from 'react';
import Card from "@components/Dashboard/User/Card";
import SelectedCard from "@components/Dashboard/User/SelectedCard";

const Tasks = ({isMobile, session}) => {

    const [isCardSelected, setIsCardSelected] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = React.useState([]);

    const handleCardSelect = ({...task}) => {
        setSelectedTask(task)
        setIsCardSelected(true)
    }

    const handleCardDeselect = () => {
        setIsCardSelected(false)
    }

    useEffect(() => {
        fetch("/api/admin/tasks")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTasks(data)
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);


    return (
        <Fragment>
            <div className="flex flex-col">
                {!isCardSelected ?
                    <div>
                        <h1 className="text-3xl font-bold text-white text-center">Tasks</h1>
                        <div className="border border-gray-500 px-0 mx-[-1px]"></div>

                        <div className={`container flex ${isMobile ? 'flex-row' : 'flex-wrap' } ${isMobile ? '' : 'items-center justify-center'} ${isMobile ? 'h-full' : 'h-96' } ${isMobile ? 'overflow-x-auto' : 'overflow-y-auto' }`}>
                            {tasks.length > 0 ? tasks?.map((task, i) => (
                                <div className={`m-3`}>
                                    <Card handleClick={() => handleCardSelect(task)}
                                            name={task.name}
                                            points={task.points}
                                            status={task.status}
                                            image={task.attachment}
                                            description={task.description}
                                    />
                                </div>
                            )) :
                            <h1 className={'text-white text-center text-3xl font-semibold my-[150px]'}>No tasks found!</h1>}
                        </div>
                    </div>
                    :
                    <div>
                         <SelectedCard handleClose={handleCardDeselect} isMobile={isMobile} data={selectedTask} session={session}/>
                    </div>
                }
            </div>
        </Fragment>
    );
};

export default Tasks;

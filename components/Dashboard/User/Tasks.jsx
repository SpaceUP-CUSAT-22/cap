import React, {Fragment, useState} from 'react';
import Card from "@components/Dashboard/User/Card";
import SelectedCard from "@components/Dashboard/User/SelectedCard";

const Tasks = () => {

    const [isCardSelected, setIsCardSelected] = useState(false)

    const handleCardSelect = () => {
        setIsCardSelected(true)
    }

    const handleCardDeselect = () => {
        setIsCardSelected(false)
    }

    return (
        <Fragment>
            <div className="flex flex-col">
                {!isCardSelected ?
                    <div>
                        <h1 className="text-3xl font-bold text-white">Tasks</h1>
                        <div className="border border-gray-500 px-0 mx-[-1px]"></div>

                        <div className="container flex flex-wrap justify-center h-96 overflow-y-auto overscroll-y-none">
                            <div className="m-3"><Card handleClick={handleCardSelect}/></div>
                            <div className="m-3"><Card handleClick={handleCardSelect}/></div>
                            <div className="m-3"><Card handleClick={handleCardSelect}/></div>
                            <div className="m-3"><Card handleClick={handleCardSelect}/></div>
                            <div className="m-3"><Card handleClick={handleCardSelect}/></div>
                        </div>
                    </div>
                    :
                    <div>
                        <SelectedCard handleClose={handleCardDeselect}/>
                    </div>
                }

            </div>

        </Fragment>
    );
};

export default Tasks;

import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <div className="flex items-center justify-center my-6 w-full">
                <div className="flex flex-col bg-pink-700 p-10 w-[70%] gap-3 items-center justify-between    ">
                    <h1 className="text-white font-bold text-3xl">About us</h1>
                    <p className="text-white">

                        SpaceUp unconference is a leading global networking platform for a new space generation. It's a space unconference where participants decide the topics, schedule, and structure of the event. Almost immediately following its debut in 2010, SpaceUp spread beyond US borders to become a global success. The goal of SpaceUp is to bring the networking aspect of traditional conferences to the forefront. It offers a low-key forum for everyone who has an insight about space that they want to share with the world. Attendees fill out the unconference grid as the event is taking place. They select the topics, provide the lectures and discussions, and assemble the audience concomitantly. At SpaceUp there are no spectators, only participants. SpaceUp is well known for bringing together many different communities who share a passion for space, creating many space careers, and seeding ideas for new space start-ups.

                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default About;

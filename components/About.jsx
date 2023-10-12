"use client"
import React, {Fragment, useEffect} from 'react';

const About = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        if (window.innerWidth < 640)
            setIsMobile(true);
    }, []);

    return (
        <Fragment>
            <div className={`flex items-center justify-center my-6 w-full`}>
                <div
                    className={`flex flex-col bg-pink-700 p-10 ${isMobile ? 'w-full' : 'w-[70%]'} gap-3 items-center justify-between`}>
                    <h1 className="text-white font-bold text-3xl">About us</h1>
                    <p className="text-white">
                        SpaceUp isn't your typical conference; it's a global phenomenon that empowers you to shape the future of space networking. Since its groundbreaking debut in 2010, SpaceUp has transcended borders, becoming a worldwide sensation.

                        Our mission? To revolutionize networking in the space industry. At SpaceUp, we believe that everyone with a space passion deserves a platform to shine. That's why we let YOU decide the agenda. No pre-set topics or schedules - you're in control!

                        Picture this: Attendees collaboratively build the event in real-time. They propose topics, lead discussions, and form the audience on the spot. There are no spectators, only participants!

                        SpaceUp is the ultimate melting pot, uniting diverse space communities, fostering careers, and sparking fresh ideas for space startups.

                        Join us, and be part of the space revolution!
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default About;

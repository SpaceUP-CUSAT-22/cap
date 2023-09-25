"use client"
import React from "react";
import {motion} from "framer-motion";
import {staggerContainer, textVariant} from "../utils/motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import {FaSlideshare, FaRegHandshake} from "react-icons/fa";
import {BsFillShareFill} from "react-icons/bs";


const procedure = [
    {
        title: "Join the Cosmic movement",
        icon: FaRegHandshake,
        content: "As a SpaceUp CUSAT Campus Ambassador, your mission is to join the cosmic movement of promoting space exploration, technology, and STEM education.",
    },
    {
        title: "Spread the word",
        icon: BsFillShareFill,
        content: "Help us reach the stars by spreading the word about our events and initiatives among your peers and on social media.",
    },
    {
        title: "Engage and Educate",
        icon: FaSlideshare,
        content: " Engage in exciting outreach activities, workshops, and webinars, and contribute to educating others about the wonders of the universe.",
    },
];


const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.25}}
                className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
            >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

                <Component/>
            </motion.section>
        );
    };

const Card = ({procedure}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{borderRight: "7px solid  #232631"}}
            iconStyle={{background: "#1d1836", color: "#fff"}}
            icon={
                <div className='flex  w-full h-full'>
                    {React.createElement(procedure.icon, {className: 'text-2xl text-white text-[30px] absolute'})}
                </div>
            }
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{procedure.title}</h3>
            </div>

            <p className='mt-5 list-disc ml-5 space-y-2'>{procedure.content}</p>
        </VerticalTimelineElement>
    );
};

const Timeline = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
                    What you should do
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
                    CAMPUS AMBASSADOR
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {procedure.map((procedure, index) => (
                        <Card
                            key={`experience-${index}`}
                            procedure={procedure}
                        />
                    ))}
                </VerticalTimeline>

            </div>
        </>
    );
};

export default SectionWrapper(Timeline, "work");

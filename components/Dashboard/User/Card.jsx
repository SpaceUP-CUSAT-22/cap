import React, {Fragment, useState} from 'react';
import Image from "next/image";


const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nunc justo. Cras in quam ullamcorper, varius neque in, sagittis enim. In malesuada non erat quis sodales. Curabitur vitae semper nisl, id pellentesque lectus. Maecenas in ex sed ipsum commodo porttitor. Sed sit amet purus in quam finibus blandit. Phasellus in est ac nisl venenatis consectetur. Vestibulum justo nulla, porttitor ut pellentesque ut, lacinia at felis. Donec nec leo dolor. Mauris consectetur nunc quis neque dignissim, a efficitur lorem ultricies.";
const Card = ({handleClick}) => {

    return (
        <Fragment>
            <div className="bg-gray-900 flex flex-col w-48 p-3 rounded cursor-pointer" onClick={handleClick}>
                <div className="overflow-hidden">
                    <Image className="object-cover transform hover:scale-105 ease-in-out transition-transform"
                           src={"/test2.jpg"} alt={"test"}
                           width={540}
                           height={675} />
                </div>
                <div className="py-2">
                    <p className="text-white font-bold">Task Name</p>
                    <p className="text-gray-400 font-bold">0 Points</p>
                    <p className="text-gray-400">{desc.slice(0, 80)}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;

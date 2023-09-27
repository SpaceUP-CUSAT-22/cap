import React, {Fragment, useState} from 'react';
import Image from "next/image";


const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nunc justo. Cras in quam ullamcorper, varius neque in, sagittis enim. In malesuada non erat quis sodales. Curabitur vitae semper nisl, id pellentesque lectus. Maecenas in ex sed ipsum commodo porttitor. Sed sit amet purus in quam finibus blandit. Phasellus in est ac nisl venenatis consectetur. Vestibulum justo nulla, porttitor ut pellentesque ut, lacinia at felis. Donec nec leo dolor. Mauris consectetur nunc quis neque dignissim, a efficitur lorem ultricies.";
const Card = ({handleClick,
    name,
    points,
    status,
    image,
    description,
}) => {

    return (
        <Fragment>
            <div className="bg-gray-900 flex flex-col w-48 h-96 p-3 rounded cursor-pointer" onClick={handleClick}>
                <div className="overflow-hidden">
                    <Image className="object-cover transform hover:scale-105 ease-in-out transition-transform"
                           src={image} alt={"test"}
                           width={540}
                           height={675} />
                </div>
                <div className="py-2">
                    <p className="text-white font-bold">{name}</p>
                    <p className="text-gray-400 font-bold">{points} Points</p>
                    <p className="text-gray-400">{description.slice(0, 80)}</p>
                    <div className="flex items-center self-end rounded mt-auto px-1">
                        <span className="text-white rounded-full p-2 bg-red-900"></span>
                        <p className="text-gray-400 px-1">Pending</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;

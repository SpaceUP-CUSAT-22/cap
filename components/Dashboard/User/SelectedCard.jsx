import React, {Fragment, useEffect, useState} from 'react';
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nunc justo. Cras in quam ullamcorper, varius neque in, sagittis enim. In malesuada non erat quis sodales. Curabitur vitae semper nisl, id pellentesque lectus. Maecenas in ex sed ipsum commodo porttitor. Sed sit amet purus in quam finibus blandit. Phasellus in est ac nisl venenatis consectetur. Vestibulum justo nulla, porttitor ut pellentesque ut, lacinia at felis. Donec nec leo dolor. Mauris consectetur nunc quis neque dignissim, a efficitur lorem ultricies.";

const SelectedCard = ({handleClose}) => {

    const [showShareText, setShowShareText] = useState(false)

    useEffect(() => {
        AOS.init();
    });

    return (
        <Fragment>
            <div data-aos="fade-up" data-aos-duration="400" className="flex flex-col w-full p-3">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="font-bold text-3xl text-white">Task Name</h1>
                    <p className="text-white bg-amber-900 rounded-2xl px-4">0 Points</p>
                    <Image className="h-5 bg-red-900 rounded-full p-1 cursor-pointer"
                           src={"/assets/icons/close.png"}
                           alt={"close"}
                           onClick={handleClose}
                           width={20} height={20} />
                </div>

                <div className="flex w-full py-4">
                    <Image className="w-1/3 rounded" src={"/test.jpeg"} alt={"test"} width={540} height={675} />

                    <div className="w-2/3 px-1 pl-4">
                        <p className="text-white">{desc}</p>

                        <div className="flex py-4">
                            <Image className="rounded-3xl p-3  py-1 ease-in-out hover:bg-gray-900 hover:border cursor-pointer"
                                   src={"/assets/icons/download.png"} alt={"download"}
                                   width={50} height={50} />
                            <div className="flex items-center hover:border cursor-pointer hover:bg-gray-900 ease-in-out rounded-3xl">
                                <Image onMouseEnter={() => setShowShareText(true)}
                                       onMouseLeave={() => setShowShareText(false)}
                                       className=" z-10 p-3  py-1"
                                       src={"/assets/icons/share.png"} alt={"download"}
                                       width={50} height={50} />
                                {showShareText && <p data-aos="fade-right"
                                                     data-aos-offset="100"
                                                     data-aos-easing="ease-in-sine"
                                                     className="z-0 bg-gray-900 p-3  py-1 rounded-3xl text-white">
                                    Share on Whatsapp</p>}
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default SelectedCard;

import React, {Fragment, useEffect, useState} from 'react';
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu nunc justo. Cras in quam ullamcorper, varius neque in, sagittis enim. In malesuada non erat quis sodales. Curabitur vitae semper nisl, id pellentesque lectus. Maecenas in ex sed ipsum commodo porttitor. Sed sit amet purus in quam finibus blandit. Phasellus in est ac nisl venenatis consectetur. Vestibulum justo nulla, porttitor ut pellentesque ut, lacinia at felis. Donec nec leo dolor. Mauris consectetur nunc quis neque dignissim, a efficitur lorem ultricies.";

const SelectedCard = ({handleClose, isMobile}) => {

    const [showShareText, setShowShareText] = useState(false)

    useEffect(() => {
        AOS.init();
    });

    const handleShareClick = () => {
        // Define the image URL and caption text
        const imageUrl = "URL_OF_YOUR_IMAGE";
        const captionText = "Your caption text here";

        // Create the WhatsApp share URL
        const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(
            captionText
        )}&image=${encodeURIComponent(imageUrl)}`;

        // Open the WhatsApp share URL in a new window or tab
        window.open(whatsappUrl);
    };

    return (
        <Fragment>
            {!isMobile ?
                <div data-aos="fade-up" data-aos-duration="400"
                     className="container flex flex-col w-full px-3 pt-3 h-96 overflow-y-auto overscroll-y-none">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="font-bold text-3xl text-white">Task Name</h1>
                        <p className="text-white bg-amber-900 rounded-2xl px-4">0 Points</p>
                        <Image className="h-5 bg-red-900 rounded-full p-1 cursor-pointer"
                               src={"/assets/icons/close.png"}
                               alt={"close"}
                               onClick={handleClose}
                               width={20} height={20}/>
                    </div>

                    <div className="flex w-full py-4">
                        <Image className="w-1/3 rounded" src={"/test.jpeg"} alt={"test"} width={540} height={675}/>

                        <div className="w-2/3 px-1 pl-4">
                            <p className="text-white">{desc}</p>

                            <div className="flex py-4">
                                <Image
                                    className="rounded-3xl p-3  py-1 ease-in-out hover:bg-gray-900 hover:border cursor-pointer"
                                    src={"/assets/icons/download.png"} alt={"download"}
                                    width={50} height={50}/>
                                <div
                                    className="flex items-center hover:border cursor-pointer hover:bg-gray-900 ease-in-out rounded-3xl"
                                    onClick={handleShareClick}
                                >
                                    <Image onMouseEnter={() => setShowShareText(true)}
                                           onMouseLeave={() => setShowShareText(false)}
                                           className=" z-10 p-3  py-1"
                                           src={"/assets/icons/share.png"} alt={"download"}
                                           width={50} height={50}/>
                                    {showShareText && <p data-aos="fade-right"
                                                         data-aos-offset="100"
                                                         data-aos-easing="ease-in-sine"
                                                         className="z-0 bg-gray-900 p-3  py-1 rounded-3xl text-white">
                                        Share on Whatsapp</p>}
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="border border-gray-500 rounded-[30px] p-3">
                        <h1 className="text-white font-bold text-[1.5rem]">Upload Your Submission</h1>
                        <div class="relative w-1/4 pt-5">
                            <label htmlFor="file-upload"
                                   className="px-4 py-2 bg-gray-700 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">
                                Upload File
                            </label>
                            <input
                                id="file-upload"
                                accept=".jpeg, .jpg, .png, .mp4, .pdf"
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <input type="text" name="description" placeholder="Add remarks about the submission"
                                   className="m-auto text-white pl-3 py-5 rounded-[15px] bg-transparent border-2 my-5 w-5/6"/>
                            <button
                                className=" text-white  rounded-[15px] bg-gray-900 border-2 p-3 py-5 w-1/6 ease-in-out active:scale-90 "
                                type={"button"}>
                                Submit
                            </button>
                        </div>


                    </div>

                </div>
                :


                <div data-aos="fade-up" data-aos-duration="400"
                     className="container rounded-3xl m-0 bg-gray-900 flex flex-col w-full min-h-screen absolute top-28 left-0 mb-56 p-5">
                    <div className="flex flex-row items-center justify-evenly">
                        <h1 className="font-bold text-3xl text-white">Task Name</h1>
                        <p className="text-white bg-amber-900 rounded-2xl px-4 m-auto">0 Points</p>
                        <Image className="h-5 bg-red-900 rounded-full p-1 cursor-pointer"
                               src={"/assets/icons/close.png"}
                               alt={"close"}
                               onClick={handleClose}
                               width={20} height={20} />
                    </div>

                    <div className="flex flex-col w-full py-4 items-center justify-center">
                        <Image className="rounded" src={"/test.jpeg"} alt={"test"} width={540} height={675} />

                        <div className="flex flex-col pt-4">
                            <p className="text-white">{desc}</p>

                            <div className="flex py-4">
                                <Image className="rounded-3xl p-3  py-1 ease-in-out hover:bg-gray-900 hover:border cursor-pointer"
                                       src={"/assets/icons/download.png"} alt={"download"}
                                       width={50} height={50} />
                                <div className="flex items-center hover:border cursor-pointer hover:bg-gray-900 ease-in-out rounded-3xl"
                                     onClick={handleShareClick}
                                >
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

                    <div className="flex flex-col items-center border border-gray-500 rounded-[30px] p-3">
                        <h1 className="text-white font-bold text-[1.5rem]">Upload Your Submission</h1>
                        <div class="flex relative pt-5">
                            <label htmlFor="file-upload" className="px-4 py-2 bg-gray-700 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">
                                Upload File
                            </label>
                            <input
                                id="file-upload"
                                accept=".jpeg, .jpg, .png, .mp4, .pdf"
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </div>

                        <div className="flex flex-col justify-between items-center">
                            <input type="text" name="description" placeholder="Add remarks about the submission"
                                   className=" text-white py-5 rounded-[15px] bg-transparent border-2 my-5 w-[20rem] px-2"/>
                            <button  className=" text-white  rounded-[15px] bg-gray-900 border-2 p-3 py-5 ease-in-out active:scale-90"
                                     type={"button"} >
                                Submit</button>
                        </div>


                    </div>

                </div>
            }
        </Fragment>
    );
};

export default SelectedCard;

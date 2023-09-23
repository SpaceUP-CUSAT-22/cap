import React from 'react';
import Image from "next/image";

const Page = props => {
    return (
        <div className="flex h-screen">
            <div className="m-auto bg-[#151515] w-1/3  rounded-2xl p-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row">
                        <Image src={"/assets/icons/hand.png"}
                               alt={"hand"}
                               width={40}
                               height={40}
                        />
                        <h1 className="text-4xl text-white">&nbsp;Get in touch</h1>
                    </div>

                    <div className="flex flex-row p-3">
                        <div className={" rounded bg-[#272727] rounded-full p-3"}>
                            <Image src={"/assets/icons/phone.png"}
                                   alt={"phone"}
                                   width={30}
                                   height={30}
                            />
                        </div>
                        <div className="flex flex-col px-2">
                            <p className="font-bold text-white">Vaishnav M</p>
                            <p className="font-bold text-gray-400">+91 1234567890</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-3">
                        <div className={" rounded bg-[#272727] rounded-full p-3"}>
                            <Image src={"/assets/icons/phone.png"}
                                   alt={"phone"}
                                   width={30}
                                   height={30}
                            />
                        </div>
                        <div className="flex flex-col px-2">
                            <p className="font-bold text-white">Vaishnav M</p>
                            <p className="font-bold text-gray-400">+91 1234567890</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-3">
                        <div className={" rounded bg-[#272727] rounded-full p-3"}>
                            <Image src={"/assets/icons/phone.png"}
                                   alt={"phone"}
                                   width={30}
                                   height={30}
                            />
                        </div>
                        <div className="flex flex-col px-2">
                            <p className="font-bold text-white">Vaishnav M</p>
                            <p className="font-bold text-gray-400">+91 1234567890</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Page;

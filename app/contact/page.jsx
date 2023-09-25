import React from 'react';
import Image from "next/image";
import Link from "next/link";

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
                    <br/>
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
                            <p className="font-bold text-gray-400">+91 85474 63632</p>
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
                            <p className="font-bold text-white">Jishnu</p>
                            <p className="font-bold text-gray-400">+91 82815 94035</p>
                        </div>
                    </div>
                    <div className="flex flex-row p-3">
                        <div className={" rounded bg-[#272727] rounded-full p-3"}>
                            <Image src={"/assets/icons/email.png"}
                                   alt={"phone"}
                                   width={30}
                                   height={30}
                            />
                        </div>
                        <div className="flex flex-col px-2 items-center justify-center">
                            <p className="font-bold text-white">spaceup@cusat.ac.in</p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-row p-3">
                            <Link href={"https://www.instagram.com/spaceupcusat/"}>
                                <div className={" rounded bg-[#272727] rounded-full p-3"}>
                                    <Image src={"/assets/icons/instagram.png"}
                                           alt={"phone"}
                                           width={30}
                                           height={30}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-row p-3">
                            <Link href={"https://www.facebook.com/SedsCusatIrescusat/"}>
                                <div className={" rounded bg-[#272727] rounded-full p-3"}>
                                    <Image src={"/assets/icons/facebook.png"}
                                           alt={"phone"}
                                           width={30}
                                           height={30}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-row p-3">
                            <Link href={"https://twitter.com/spaceupcusat"}>
                                <div className={" rounded bg-[#272727] rounded-full p-3"}>
                                    <Image
                                        src={"/assets/icons/twitter.png"}
                                           alt={"phone"}
                                           width={30}
                                           height={150}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Page;

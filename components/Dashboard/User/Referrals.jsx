import React, {Fragment} from 'react';
import Card from "@components/Dashboard/User/Card";
import SelectedCard from "@components/Dashboard/User/SelectedCard";
import Image from "next/image";

const Referrals = ({isMobile}) => {

    const handleCopyClick = async () => {
        await navigator.clipboard.writeText("1234567")
    }

    return (
        <Fragment>
            <div className="flex flex-col">
                <div>
                    <h1 className="text-3xl font-bold text-white">Referrals</h1>
                    <div className="border border-gray-500 px-0 mx-[-1px]"></div>

                    <div className={`container flex  justify-center items-center h-96 ${isMobile ? 'overflow-x-auto' : 'overflow-y-auto'}`}>
                        <div className="flex rounded-2xl border-2 items-center">
                            <div className="bg-gradient-to-r from-purple-500 via-red-500 to-yellow-300 hover:bg-red-900 rounded-2xl p-5">
                                <p className="text-white font-bold text-3xl">1234567</p>
                            </div>
                            <div className="hover:-translate-y-0.5 ease-in-out  rounded-2xl cursor-pointer" onClick={handleCopyClick}>
                                <Image src={"/assets/icons/copy.png"} alt={"copy"} width={50} height={50}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default Referrals;

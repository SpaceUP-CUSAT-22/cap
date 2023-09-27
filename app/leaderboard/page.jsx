import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Page = props => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex items-center text-center justify-center m-auto bg-[#151515] w-1/3  rounded-2xl px-40 py-20 md:p-10">
                <h1 className="text-white font-bold text-4xl">Coming Soon</h1>
            </div>
        </div>
    );
};

export default Page;

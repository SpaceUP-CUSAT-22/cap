"use client"
import React from 'react';
import Image from 'next/image';
import {BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagram} from 'react-icons/bi';
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="bg-primary text-white py-6 ">
            <div className="w-full flex  gap-y-16 md:flex-row p-10 items-center ">
                <div className="flex flex-1">
                    <div className="flex flex-col mx-auto text-center gap-y-4 ">
                        <p className="text-lg font-medium tracking-wider ">SOCIAL</p>
                        <div className="flex flex-row gap-x-1">
                            {/*<BiLogoFacebookCircle size={21}/>*/}
                            <Link href="https://www.facebook.com/SedsCusatIrescusat/"
                                  className="text-gray-300 ">Facebook</Link>
                        </div>
                        <div className="flex flex-row gap-x-1 ">
                            {/*<BiLogoInstagram size={21}/>*/}
                            <Link href="https://www.instagram.com/spaceupcusat/"
                                  className="text-gray-300">Instagram</Link>
                        </div>
                        <div className="flex flex-row gap-x-1">
                            {/*<BiLogoTwitter size={21}/>*/}
                            <Link href="https://twitter.com/spaceupcusat" className="text-gray-300">Twitter</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-1">
                <div className="flex flex-col mx-auto text-center">
                    <Image
                        src='/assets/images/logo1.svg'
                        alt='logo'
                        width={200}
                        height={200}
                        className='object-contain mt-[-40px]'
                    />
                    <p className="text-sm mt-[-20px] text-gray-400">copyright&copy;Space up cusat.<br/> All Rights
                        Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

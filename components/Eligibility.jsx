"use client"
import React from 'react'


const Eligibility = () => {

    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        if (window.innerWidth < 640) {
            setIsMobile(true)
        }
    }, [])

    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div
                className={`flex flex-col items-center justify-center ${isMobile ? 'w-full' : 'w-[70%] pb-20'} bg-gradient-to-t from-pink-700 via-purple-500  px-10 lg:px-16 md:px-24 `}>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Eligibility.</h2>
                <p className={`${isMobile ? 'pb-5' : 'mt-4'} text-white text-[17px] max-w-3xl leading-[30px]`}>
                    Any student currently pursuing education in an established institute who wishes to participate in
                    Space Up may apply.
                </p>
                <p className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'>
                    Special certificate for top 50 people.Certificate for those who completed a certain tier (% of
                    work).
                </p>
            </div>
        </div>
    )
}

export default Eligibility

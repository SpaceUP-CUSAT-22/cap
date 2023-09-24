import React, {Fragment} from 'react';
import {useRouter} from "next/navigation";

const JoinNow = () => {
    const router = useRouter()
    const [isMobile, setIsMobile] = React.useState(false)
    React.useEffect(() => {
        if (window.innerWidth < 640) {
            setIsMobile(true)
        }
    }, [])
    return (
        <Fragment>
            <div className={`flex items-center justify-center my-6 w-full`}>
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'}  bg-pink-700 p-10 w-[70%] gap-3 items-center justify-between `}>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-white font-bold text-3xl">Ready to win Exciting Prizes?</h1>
                        <p className="text-white">Become a part of India’s largest space conference</p>
                    </div>
                    <button className="bg-white active:scale-90 ease-in-out rounded-3xl py-2 px-6">SIGN UP</button>
                </div>
            </div>
        </Fragment>
    );
};

export default JoinNow;

// Add a small new section at the end “”  (SIGN UP BUTTON)
//

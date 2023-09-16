import React from 'react'


const Eligibility = () => {
    return (
        <div className="flex flex-col md:flex-row ">
            <div className='w-full md:w-3/5 bg-gradient-to-t from-[#00FFFF] via-primary to-transparent px-10 lg:px-16 md:px-24 pb-20'>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Eligibility.</h2>
                <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                    Any student currently pursuing education in an established institute who wishes to participate in Space Up may apply.Applicants having good interpersonal and communication skills with previous experience will be given preference.
                </p>
                <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                    Special certificate for top 20 people.Certificate for those who completed a certain tier (% of work).
                    Extra benefits for excellence in work (Awarded by Space Up PRC)
                </p>
            </div>
                {/* set image */}
            {/* <div className=" ml-20 mt-[-60px] ">
                <img src="prize" alt="prizes" className=" object-contain" />
            </div> */}
        </div>
    )
}

export default Eligibility
import React from 'react'

const benefit = [
    {
        amount: '$100000+',
        position: '1st',
        color: 'bg-violet-400',
    },
    {
        amount: '1st Prize',
        position: '1st',
        color: 'bg-orange-400',

    },
    {
        amount: '1st Prize',
        position: '1st',
        color: 'bg-green-400',

    }
]


const Prizes = ({ amount , position ,color }) => {

    return (
        <div className={`relative ${color} w-64 rounded-tl-2xl rounded-br-2xl overflow-hidden`}>
            <div className="absolute top-0 right-0 w-0 h-0 border-r-16 border-b-16 border-blue-500"></div>
            <div className="p-4">
                <h2 className="text-white text-2xl font-bold mb-2">{amount}</h2>
                <p className="text-white text-sm">{position}</p>
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <div className='w-full flex items-center texxt-center flex-col py-36 px-10'>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px]  text-[30px] pb-4">Prizes and Benefits.</h2>
            <h2 className="text-[#FFFF00] font-black md:text-[50px] sm:text-[30px] text-[25px]  pb-6">Prizes Worth 1Lakh.</h2>
            <div className='flex gap-6 flex-wrap justify-center'>
            {benefit.map((benefit, i) => (
                <Prizes key={i} amount={benefit.amount} position={benefit.position} color={benefit.color} />
            ))}
            </div>
        </div>
    )
}

export default Card
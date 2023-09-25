import React from 'react'
import Image from 'next/image'

const benefit = [
    {
        amount: 'Cash Prizes.',
        position: 'Top 3',
        color: 'bg-violet-400',
    },
    {
        amount: 'Goodies & Exclusive merchandise',
        position: 'Top 5',
        color: 'bg-orange-400',

    },
    {
        amount: 'Free Program Tickets.',
        position: 'Top 10',
        color: 'bg-green-700',

    },
    {
        amount: 'Special Certificate for their Excellence.',
        position: 'Top 50',
        color: 'bg-blue-500',
    }
]


const extras = [
    {
        amount: 'Enjoy exclusive access to SpaceUp CUSAT events, content, and opportunities, including webinars, workshops, and networking sessions.',
        position: 'Exclusive Access',
        color: 'bg-zinc-800',
    },
    {
        amount: 'Receive certificates of recognition for your outstanding contribution to space and STEM education.',
        position: 'Certificates of Recognition',
        color: 'bg-zinc-800',

    },
    {
        amount: 'Enhance your leadership, communication, and event management skills as part of our cosmic crew.',
        position: 'Skill Development',
        color: 'bg-zinc-800',

    }
]


const Prizes = ({amount, position, color}) => {

    return (
        <div className={`relative ${color} w-64 rounded-tl-2xl rounded-br-2xl overflow-hidden`}>
            <div className="absolute top-0 right-0 w-0 h-0 border-r-16 border-b-16 border-blue-500"></div>
            <div className="p-4">
                <p className="text-white font-bold text-2xl">{position}</p>
                <h2 className="text-white  font-bold mb-2">{amount}</h2>
            </div>
        </div>
    )
}

const Card = () => {
    return (
        <div className='w-full flex items-center texxt-center flex-col py-36 px-10'>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px]  text-[30px] pb-4">Prizes and
                Benefits.</h2>
            <h2 className="text-[#FFFF00] font-black text-[20px] pb-6">Prizes worth ₹15,000 and exclusive access to a
                galaxy of benefits</h2>
            <div className={'flex justify-center'}>
                <Image width={'350'} height={'300'} src={'/assets/images/prizes-worth.svg'} />
            </div>
            <div className='flex gap-6 flex-wrap justify-center'>
                {benefit.map((benefit, i) => (
                    <Prizes key={i} amount={benefit.amount} position={benefit.position} color={benefit.color}/>
                ))}
            </div>

            <div className="border border-dashed border-amber-50 w-[70%] my-6"></div>

            <h3 className="text-white my-6 text-3xl">Additional Benefits</h3>

            <div className="flex gap-6 flex-wrap justify-center ">
                {extras.map((benefit, i) => (
                    <Prizes key={i} amount={benefit.amount} position={benefit.position} color={benefit.color}/>
                ))}
            </div>
        </div>
    )
}

export default Card

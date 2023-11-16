'use client'
import Link from 'next/link'
import React from 'react'

const Featured = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2'>
        <div className='bg-white p-12 md:p-24 flex justify-end items-center'>
            <Link href={'/blog/'}>
                <img
                    src='https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    className='w-full h-full inset-0 object-cover opacity-0-70'
                />
            </Link>
        </div>
        <div className='bg-gray-100 p-12 md:p-24 flex justify-start items-center'>
            <div className='max-w-md'>
                <div className='w-24 h-2 bg-purple-700 mb-4'></div>
                <h2 className='font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6'>Voted The most tasty treat</h2>
                <p
                className='font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed'
                >Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
                <Link
                className='inline-block border-2 border-purple-800 font-light text-purple-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-purple-800 hover:text-white'
                href={'/blog'}>Read More</Link>
            </div>
        </div>
    </section>
  )
}

export default Featured
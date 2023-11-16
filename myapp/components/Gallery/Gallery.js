'use client'
import Link from 'next/link'
import React from 'react'

const Gallery = () => {
  return (
    <section className='flex flex-wrap bg-black'>
        <Link
        className='bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-screen font-heading text-white uppercase tracking-widest hover:opacity-75'
        href={'/blog'}>
            <div className='relative z-10'>Glazed</div>
        <img
            className='absolute inset-0 w-full h-full object-cover opacity-50'
            src='https://images.pexels.com/photos/7034128/pexels-photo-7034128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            />
        </Link>
        <Link
        className='bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-screen font-heading text-white uppercase tracking-widest hover:opacity-75'
        href={'/blog'}>
            <div className='relative z-10'>Custom</div>
        <img
            className='absolute inset-0 w-full h-full object-cover opacity-50'
            src='https://images.pexels.com/photos/1200655/pexels-photo-1200655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            />
        </Link>
        <Link
        className='bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-screen font-heading text-white uppercase tracking-widest hover:opacity-75'
        href={'/blog'}>
            <div className='relative z-10'>Filled</div>
        <img
            className='absolute inset-0 w-full h-full object-cover opacity-50'
            src='https://images.pexels.com/photos/4774231/pexels-photo-4774231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            />
        </Link>
        
    </section>
  )
}

export default Gallery
'use client'
import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <section className=''>
        <div className='text-center py-12 px-6 mt-12'>
        <h1 className='font-display font-bold text-5xl mb-6'>Donut Memories</h1>
        <p className='max-w-lg mx-auto'>The place where tasty memories are shared and kept forever. Sit back and read about some of our most memorable tasty treats.</p>
        </div>
        <div className='container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24'>
        <div>
            <Link
            className=''
            href={'/blog'}>
                <img
                className='w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover'
                src='https://images.pexels.com/photos/6940977/pexels-photo-6940977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
            </Link>
            <div className='bg-gray-50 p-8'>
                <div className='text-xs text-gray-600 uppercase font-semibold'>
                    <span className='text-xs text-gray-600 uppercase font-semibold'>11/16/2023</span>
                <h2 className='mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm'>Donut Blog Title</h2>
                <p className='mt-4 max-w-md'>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
                </p>
                <Link
                className='flex items-center mt-6 uppercase text-sm text-black font-semibold'
                href={'/blog'}>Read Blog</Link>
                </div>
            </div>
        </div>
        <div>
            <Link
            className=''
            href={'/blog'}>
                <img
                className='w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover'
                src='https://images.pexels.com/photos/6940977/pexels-photo-6940977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
            </Link>
            <div className='bg-gray-50 p-8'>
                <div className='text-xs text-gray-600 uppercase font-semibold'>
                    <span className='text-xs text-gray-600 uppercase font-semibold'>11/16/2023</span>
                <h2 className='mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm'>Donut Blog Title</h2>
                <p className='mt-4 max-w-md'>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
                </p>
                <Link
                className='flex items-center mt-6 uppercase text-sm text-black font-semibold'
                href={'/blog'}>Read Blog</Link>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default BlogPage
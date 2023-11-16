'use client'
import React from 'react'

const BlogDetail = () => {
  return (
    <section className='relative h-screen'>
       <div className='relative h-[600px]'>
       <img
        className='w-full h-full object-cover'
        src='https://images.pexels.com/photos/3628508/pexels-photo-3628508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
       />
       </div>
       <div className='max-w-4xl h- mx-auto bg-white py-12 px-12 lg:px-24 -mt-32 relative z-10'>
            <h2 className='mt-4 uppercase tracking-widest text-xs text-gray-600'>
                11/16/2023
            </h2>
            <h1 className='font-display text-2xl md:text-3xl text-gray-900 mt-4'>Donut title</h1>
            <div className='prose prose-sm sm:prose lg:prose-lg mt-6'>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            </div>
       </div>
    </section>
  )
}

export default BlogDetail
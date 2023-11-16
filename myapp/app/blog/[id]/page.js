'use client'
import React, { useState } from 'react';

// Dummy comments data for illustration
const comments = [
  { username: 'User1', comment: 'This is a great post!' },
  { username: 'User2', comment: 'Nice content! Thanks for sharing.' },
  { username: 'User3', comment: 'I have a question about this topic.' },
];

const BlogDetail = () => {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = () => {
    // Add the new post to the list of posts
    setPosts([...posts, newPost]);
    // Clear the new post input
    setNewPost('');
  };

  return (
    <section className='relative min-h-screen overflow-hidden'>
      <div className='relative h-[600px]'>
        <img
          className='w-full h-full object-cover'
          src='https://images.pexels.com/photos/3628508/pexels-photo-3628508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Blog Cover'
        />
      </div>
      <div className='max-w-4xl mx-auto bg-white py-12 px-12 lg:px-24 -mt-32 relative z-10'>
        <h2 className='mt-4 uppercase tracking-widest text-xs text-gray-600'>
          11/16/2023
        </h2>
        <h1 className='font-display text-2xl md:text-3xl text-gray-900 mt-4'>
          Donut title
        </h1>
        <div className='prose prose-sm sm:prose lg:prose-lg mt-6'>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
        </div>

        <div className='mt-12'>
          <h2 className='text-xl font-bold text-gray-900 mb-4'>Comments</h2>
          {comments.map((comment, index) => (
            <div key={index} className='bg-gray-100 p-4 mb-4'>
              <p className='text-gray-800 font-bold'>{comment.username}</p>
              <p className='text-gray-800'>{comment.comment}</p>
            </div>
          ))}
        </div>

        <div className='mt-8'>
          <h2 className='text-xl font-bold text-gray-900 mb-4'>Add New Post</h2>
          <textarea
            className='w-full h-32 p-2 border border-gray-300 rounded mb-4'
            placeholder='Type your new post here...'
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button
            className='bg-purple-500 text-white px-4 py-2 rounded w-full'
            onClick={handlePostSubmit}
          >
            Post
          </button>
        </div>
   </div>
    </section>
  );
};

export default BlogDetail;

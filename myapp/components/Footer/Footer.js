'use client'
import React from 'react'
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';


const Footer = () => {
  return (
  
    <footer className="bg-purple-800 mt-12 pt-4 pb-8 xl:pt-8 border border-t-slate-500">
    <div class="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
        <ul class="flex flex-wrap justify-center pb-8 text-lg font-light">
            <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                    <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Components
                    </h2>
                    <ul>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Elements
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Forms
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Commerces
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Navigation
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                    <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Contacts
                    </h2>
                    <ul>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Github
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Facebook
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Twitter
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                    <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Customization
                    </h2>
                    <ul>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Settings
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Themes
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Plugins
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
          <a href="#" style={{ color: '#FF0000' }}>
            <FaYoutube size={20} />
          </a>
          <a href="#" className='text-black'>
            <FaTiktok size={20} />
          </a>
          <a href="#" className='text-blue-400'>
            <FaTwitter size={20} />
          </a>
          <a href="#" className='text-blue-700'>
            <FaFacebook size={20} />
          </a>
         </div>
        <div class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            By thejayadad
        </div>
    </div>
</footer>

  )
}

export default Footer
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20 '>
      <div className='text-center'>
        <h3>Mark Ivan Dela Vega.</h3>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=''
            className='w-6'
          />
          0129midv@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Mark Ivan Dela Vega. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a target='_blank' href='#'>
              Github
            </a>
          </li>
          <li>
            <a target='_blank' href='#'>
              Facebook
            </a>
          </li>
          <li>
            <a target='_blank' href='#'>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

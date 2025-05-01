import React from 'react'

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/blog",
    display: "Blog",
  },

]
const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find A Doctor",
  },
  {
    path: "/",
    display: "Find A Location",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
]

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
]


const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt='' />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
              Copyright © {year} Developed by Macreen Smith all rights reserved</p>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-textColor'>Quick Links</h2>

            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

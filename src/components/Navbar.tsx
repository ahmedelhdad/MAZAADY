'use client'
import React, { useState } from 'react'
import Logo from '../../public/img/Logo.png'
import Image from "next/image";
import NextLink from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import Profile from '../../public/img/imgprofile.png'
import { IoIosAdd } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { PiListThin } from "react-icons/pi";

const Navbar = () => {
  const [list, setList] = useState(false)
  return (
    <div className='p-4 flex items-center justify-between '>
      <div className=' relative '>
        <div className='flex items-center space-x-4  lg:space-x-8 '>
          <div className=' lg:hidden cursor-pointer' onClick={() => setList(!list)}>
            <PiListThin className='text-2xl' />
          </div>
          <div>
            <Image src={Logo} alt='logo ' />
          </div>
          {
            list && (
              <div className='  lg:hidden absolute top-full flex flex-col ' >
                <NextLink href='/' passHref >
                  <h1 className=' text-text font-bold py-4 '>Home</h1>
                </NextLink>
                <NextLink href='/' passHref >
                  <h1 className='text-title py-4 '>Blog</h1>
                </NextLink>
                <NextLink href='/' passHref >
                  <h1 className='text-title py-4 '>Gifts</h1>
                </NextLink>
                <div className='flex items-center py-4 max-w-full cursor-pointer text-white px-4 space-x-2 h-[40px] rounded-[10px] bg-gradient-to-l from-yellow to-btnFirstbg'>
                  <IoIosAdd className='text-xl border rounded-full' />
                  <span>Add New Product</span>
                </div>
                <div className='flex items-center space-x-3 py-4'>
                  <RiGlobalLine className='text-2xl' />
                  <span className='text-lg font-semibold'>EN</span>
                </div>
              </div>
            )
          }
          <div className=' hidden lg:flex space-x-8 ' >
            <NextLink href='/' passHref className='relative' >
              <h1 className=' text-text font-bold '>Home</h1>
              <div className=' absolute mt-3 w-full h-2 rounded-t-3xl bg-text'></div>
            </NextLink>
            <NextLink href='/' passHref >
              <h1 className='text-title  '>Blog</h1>
            </NextLink>
            <NextLink href='/' passHref >
              <h1 className='text-title  '>Gifts</h1>
            </NextLink>
          </div>
        </div>
      </div>
      <div className='flex items-center space-x-6'>
        <div className='flex items-center space-x-5 lg:space-x-10'>

          <NextLink href='/search' passHref>
            <CiSearch className='text-[24px] cursor-pointer' />
          </NextLink>

          <IoNotificationsOutline className='text-[24px] cursor-pointer' />
          <Image src={Profile} alt='profile' />
        </div>
        <div className='hidden items-center space-x-4  lg:flex'>
          <div className='flex items-center cursor-pointer text-white  px-4 max-w-full space-x-2 h-[40px] rounded-[10px] bg-gradient-to-l from-yellow to-btnFirstbg'>
            <IoIosAdd className='text-xl border rounded-full' />
            <span>Add New Product</span>
          </div>
          <div className='flex items-center space-x-3'>
            <RiGlobalLine className='text-2xl' />
            <span className='text-lg font-semibold'>EN</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

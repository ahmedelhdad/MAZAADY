'use client'
import React, { useState } from 'react'
import imgProfile from '../../public/img/Profile.png'
import Image from 'next/image'
import { CiUser, CiStar } from "react-icons/ci";
import Logo from '../../public/img/Logo.png'
import bcode from '../../public/img/bcode.png'
import { LuEye } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiFileArrowDownLight, PiFileThin } from "react-icons/pi";
import { LiaUserCheckSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Profile = () => {
    const [show, setShow] = useState(true)
    return (
        <div className=' lg:w-1/3'>
            <div className='space-y-4'>
                <div>
                    <Image src={imgProfile} alt='profile' />
                </div>
                <h1 className='text-2xl font-bold'>Hala Ahmed</h1>
                <p className='text-textColor'>I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.</p>
                <div className='flex items-center px-4 justify-between'>
                    <div className='flex items-center gap-2'>
                        <LiaUserCheckSolid className='text-3xl text-yellow' />
                        <div className='flex flex-col'>
                            <span className='text-xl font-medium'>5</span>
                            <span className='text-yellow'>Following</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiUser className='text-3xl text-yellow' />
                        <div className='flex flex-col'>
                            <span className='text-xl font-medium'>20</span>
                            <span className='text-yellow'>Followers</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiStar className='text-3xl text-yellow' />
                        <div className='flex flex-col'>
                            <div className=' relative flex'>
                                <h1 className='text-xl font-medium'>4.2</h1>
                                <span className='text-sm mt-2 ml-1 text-textColor'>(15)</span>
                            </div>
                            <span className='text-yellow'>Rate</span>
                        </div>
                    </div>
                </div>
                <button className='w-full bg-gradient-to-l h-[48px] text-white text-[16px] rounded-[10px] from-yellow to-btnFirstbg'>Follow</button>
            </div>
            <div className='mt-12 space-y-12 w-full'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold'>QR Code </h1>
                    <div className='flex items-center space-x-6 text-2xl'>
                        <LuEye className=' cursor-pointer' />
                        <IoShareSocialOutline className=' cursor-pointer' />
                        <PiFileArrowDownLight className=' cursor-pointer' />
                        <div onClick={() => setShow(!show)}>
                            {
                                show ? <IoIosArrowDown className=' cursor-pointer' /> : <IoIosArrowUp className=' cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>
                {
                    show && (
                        <div className=''>
                            <div className='flex items-center justify-center space-x-2'>
                                <PiFileThin className=' cursor-pointer text-3xl text-yellow' />
                                <span className='text-sm'>Download the QR code or share it with your friends.</span>
                            </div>
                            <div className='bg-gradient-to-l w-full py-5 px-5 rounded-[20px] from-yellow to-btnFirstbg  ' >
                                <div className='flex justify-start flex-col py-1 space-y-2 items-center bg-white'>
                                    <Image src={Logo} alt='logo' />
                                    <h1 className='text-xl font-bold text-textBlack'>Hala Ahmed</h1>
                                    <Image src={bcode} alt='bcode' />
                                    <span className=' capitalize'>Follow Us On Mazaady</span>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default Profile

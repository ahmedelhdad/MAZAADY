'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import axios from 'axios';
import NextLink from "next/link";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const respons = await axios.get('https://staging.mazaady.com/api/v1/get_all_cats', {
        headers: {
          "private-key": '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
        }

      })

      if (respons.data) {
        setData(respons.data.data.categories)
        setIsLoading(false)
      }
    }
    getData()
  }, [])
  return (
    <div className=' lg:w-2/3 mt-8 lg:mt-0 space-y-8 flex flex-col   '>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-1 lg:space-x-6'>
          <h1 className=' border border-yellow w-[108px]  h-[35px] rounded-[14px] flex justify-center items-center text-yellow'>Products</h1>
          <h1 className='text-title w-[108px] h-[35px] rounded-[14px] flex justify-center items-center'>Articles</h1>
          <h1 className='text-title w-[108px] h-[35px] rounded-[14px] flex justify-center items-center'>Reviews</h1>
        </div>
        <div className='hidden lg:flex items-center py-4 max-w-full  cursor-pointer text-white px-4 space-x-2 h-[40px] rounded-[10px] bg-gradient-to-l from-yellow to-btnFirstbg'>
          <IoIosAdd className='text-xl border rounded-full' />
          <span>Add Review</span>
        </div>
      </div>

      <div>
        <div className='flex items-center space-x-2'>
          <h1 className='text-4xl font-bold'>Products</h1>
          <span className='text-title'>({data.length})</span>
        </div>
        <div className=''>


          {
            isLoading ? 'Loading...' : (
              data.map((product: any) => {
                return (
                  <div className='flex space-x-4 py-6' key={product.id}>
                    <NextLink href={`/${product.name}`} passHref className=' relative h-[72px] lg:h-[120px]'>
                      <img src={product.image} alt={product.name} className=' w-40 lg:w-80 h-[72px] lg:h-[120px]' />
                      <div className=' absolute  top-[52px] right-0 lg:top-[82px]  lg:right-0 w-[66px] h-[20px] lg:w-[118px] lg:h-[36px] text-[8px] lg:text-sm  rounded-ss-[31px] rounded-ee-[31px] text-textwhite  flex items-center justify-center bg-colorLive'>Live Auction</div>
                    </NextLink>
                    <div className='flex flex-col justify-between flex-1'>
                      <h4 className='  text-[10px]  lg:text-[18px] text-textBlackcolor'>{product.name}</h4>
                      <div className='flex items-center space-x-3 '>
                        <h5 className='  text-[10px] lg:text-[18px] text-title'>Starting Price</h5>
                        <h1 className='  text-sm  lg:text-2xl font-bold'>1000 EGP</h1>
                      </div>
                      <div className='flex justify-around w-full lg:items-center  flex-col lg:flex-row'>
                        <h5 className='text-title text-[10px] lg:text-[15px]'>Lot Starts In</h5>
                        <div className='flex justify-around items-center lg:flex-1 lg:ml-2'>
                          <div className='  text-yellow flex font-bold items-end gap-1 bg-bgTitle rounded-[14px]'>
                            <h2 className='text-sm lg:text-xl'>2</h2>
                            <span className='text-[10px] lg:text-sm'>Days</span>
                          </div>
                          <div className='  text-yellow flex font-bold items-end gap-1 bg-bgTitle rounded-[14px]'>
                            <h2 className='text-sm lg:text-xl'>10</h2>
                            <span className='text-[10px] lg:text-sm'>Hours</span>
                          </div>
                          <div className='  text-yellow flex font-bold items-end gap-1 bg-bgTitle rounded-[14px]'>
                            <h2 className='text-sm lg:text-xl'>50</h2>
                            <span className='text-[10px] lg:text-sm'>Minutes</span>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className='   flex justify-end lg:px-4'>
                      <CiHeart className='text-4xl' />
                    </div>
                  </div>
                )
              })
            )
          }



        </div>
      </div>
    </div>
  )
}

export default Products

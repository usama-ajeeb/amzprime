import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import { IoAddCircleSharp } from 'react-icons/io5'
function Tooltip() {
  return (
    <div className='bg-[#212d3a] fixed  z-50 w-screen lg:right-[60px] top-[70px] lg:w-[440px] px-4  shadow-slate-900 shadow-2xl text-[#BBC1C6] flex  gap-x-4  justify-between'>
      <div className='flex flex-col gap-y-5 py-5'>
        <p>Your watchList</p>
        <p>Acount & settings</p>
        <p>watch anywhere</p>
        <p>help</p>
        <p>Not haris? Sign Out</p>
      </div>
      <div className=' border-l-[1px] border-gray-400'></div>
      <div className='flex flex-col gap-y-5 py-5'>
        <div className='flex items-center gap-x-1'>
          <BsFillStarFill size={35} color='gold' /> <p>Kids</p>
        </div>
        <div className='flex items-center gap-x-1'>
          <IoAddCircleSharp size={35} color='#425265' /> <p>Kids</p>
        </div>
        <p>Manage profiles </p>
        <p>Learn more</p>
      </div>
      <div></div>
    </div>
  )
}

export default Tooltip

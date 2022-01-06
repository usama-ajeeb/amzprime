import React, { useState } from 'react'
import { BsFillPlayCircleFill, BsPlus } from 'react-icons/bs'
import { PlayIcon } from '@heroicons/react/solid'

const dumyText =
  '            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium vel, inventore tenetur nostrum itaque porro vero voluptatibus neque aliquam accusantium ipsa minima cum, deserunt possimus nemo repellat molestiae eos.'

function PreviewCard({ img, title, description, date }) {
  const [isShown, setIsShown] = useState(false)
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className='flex  flex-col gap-y-2 text-white  bg-[#1A242F] '
    >
      {!isShown && (
        <img className='  max-w-[320px] max-h-[165px]' src={img} alt='' />
      )}
      {isShown && (
        <div className=' relative z-50 cursor-pointer flex flex-col gap-y-3  w-[100%] h-[390px] bg-slate-800 rounded-md hover:scale-x-125 hover:scale-y-110 hover:shadow-2xl transition  duration-700 ease-in-out'>
          <img className='  w-[299px] h-[265px]' src={img} alt='' />
          <div className=' flex items-center justify-between px-3'>
            {/* <BsFillPlayCircleFill
              color=''
              size={40}
              className=' hover:bg-slate-800'
            /> */}
            <PlayIcon className=' border-[1px] text-slate-500 hover:text-sky-200 h-10 border-white  rounded-full hover:bg-sky-600 hover:border-0 ' />
            <div className='relative mr-20'>
              <hr className='  relative bg-slate-400 border-2 w-20' />
              <hr className=' absolute  border-2 border-sky-500 w-10 top-0' />
            </div>
            <BsPlus size={40} />
          </div>
          <div className=' flex flex-col gap-y-2 ml-5'>
            <h1 className='text-lg '>{title}</h1>
            <p className='w-[270px] text-sm'>{truncateString(dumyText, 100)}</p>
          </div>
          <p className='flex gap-x-3 ml-5 pb-3'>
            <span>{date}</span>
            <span className='border border-slate-600'>12+</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default PreviewCard

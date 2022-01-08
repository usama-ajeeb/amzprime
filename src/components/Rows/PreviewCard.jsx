import React, { useState } from 'react'
import { BsFillPlayCircleFill, BsPlus } from 'react-icons/bs'
import { PlayIcon } from '@heroicons/react/solid'

const dumyText =
  '            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum praesentium vel, inventore tenetur nostrum itaque porro vero voluptatibus neque aliquam accusantium ipsa minima cum, deserunt possimus nemo repellat molestiae eos.'
// function PreviewCard({ img, title, description, date }) {
//   const [isShown, setIsShown] = useState(false)
//   function truncateString(str, num) {
//     if (str?.length > num) {
//       return str.slice(0, num) + '...'
//     } else {
//       return str
//     }
//   }
//   return (
//     <div
//       onMouseEnter={() => setIsShown(true)}
//       onMouseLeave={() => setIsShown(false)}
//       className='flex  flex-col gap-y-2 text-white  bg-[#1A242F] '
//     >
//       <img className='  max-w-[320px] max-h-[165px]' src={img} alt='' />
//     </div>
//   )
// }

// export default PreviewCard

// test

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
      className='flex flex-col gap-y-2 text-white w-screen  overflow-visible'
    >
      {!isShown && (
        <img
          className='w-[294px] h-[165px] brightness-110  saturate-150'
          src={img}
          alt=''
        />
      )}
      {isShown && (
        <div className=' z-[99]  overflow-visible  cursor-pointer flex flex-col   w-[269px] h-[345px] bg-slate-800 rounded-md hover:scale-x-125 hover:scale-y-105 hover:shadow-2xl shadow-gray-500 transition ml-1   duration-500 ease-in-out'>
          <img className='  w-[100%]  rounded-t-md' src={img} alt='' />
          <div className=' flex items-center justify-between px-5'>
            <PlayIcon className=' border-[1px] text-slate-500 hover:text-sky-200 h-6 border-white rounded-full hover:bg-sky-600 hover:border-0 ' />
            <div className='relative mr-10'>
              <hr className='  relative bg-slate-400 border-2 w-20' />
              <hr className=' absolute  border-2 border-sky-500 w-10 top-0' />
            </div>
            <BsPlus size={40} />
          </div>
          <div className=' flex flex-col gap-y-2 ml-6'>
            <h1 className=' text-[14px] w-44 font-semibold '>{title}</h1>
            <p className='w-[240px] text-sm'>{truncateString(dumyText, 70)}</p>
          </div>
          <p className='flex gap-x-3 ml-2  py-4'>
            <span>{date}</span>
            <span className='border border-slate-600'>12+</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default PreviewCard

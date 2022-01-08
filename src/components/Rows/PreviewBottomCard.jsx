import React, { useState } from 'react'

import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

function PreviewBottomCard({ img, video, title, ratting, type, id }) {
  const [mute, setMute] = useState(true)

  const muteHandler = () => {
    if (mute) {
      setMute(false)
    } else {
      setMute(true)
    }
  }

  return (
    <div className='flex  lg:px-72'>
      <div className='relative hidden xl:block'>
        <img
          className=' brightness-50 rounded-l-lg max-w-[455px] h-[520px]'
          src={img}
          alt=''
        />
        <h1 className='  absolute z-50 text-white text-3xl top-5 ml-5 font-bold'>
          {title}
        </h1>
        <div className=' absolute top-[410px] flex items-center text-white gap-x-3 ml-10'>
          <p className=' text-slate-500 border-slate-500 border-[1px] p-[1px]'>
            {ratting}
          </p>
          <p>{type}</p>
          <AiOutlineExclamationCircle
            size={40}
            className=' border-slate-500 border-[1px] rounded-full p-2 absolute -top-16'
          />
        </div>
      </div>
      <div className=' relative'>
        <video
          className=' lg:h-[520px] bg-black'
          src={video}
          muted={!mute ? false : true}
          autoPlay
        ></video>
        <div onClick={muteHandler}>
          {mute ? (
            <FaVolumeMute
              size={30}
              color='white'
              className=' absolute  top-7 right-8'
            />
          ) : (
            <FaVolumeUp
              size={30}
              color='white'
              className=' absolute top-7 right-8'
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PreviewBottomCard

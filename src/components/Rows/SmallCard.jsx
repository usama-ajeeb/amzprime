import React from 'react'

function SmallCard({ id, url, lang }) {
  return (
    <div id={id} className='relative  w-[130px] h-[130px]  '>
      <img
        className=' w-[130px] h-[130px] rounded-md absolute'
        src={url}
        alt=''
      />
      <h1 className='relative -bottom-20 left-3 text-white text-lg font-semibold'>
        {lang}
      </h1>
    </div>
  )
}

export default SmallCard

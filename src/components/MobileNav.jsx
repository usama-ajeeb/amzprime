import React from 'react'

function MobileNav() {
  return (
    <div className='fixed lg:hidden flex flex-col bg-[#252E39] w-screen top-20 shadow-2xl text-white font-semibold text-lg z-50 py-4'>
      <p className=' pb-4 pl-5 opacity-75 hover:opacity-100 cursor-pointer '>
        Home
      </p>
      <hr className=' pt-3  border-slate-500 cursor-pointer' />
      <p className=' pb-4 pl-5 opacity-75 hover:opacity-100 cursor-pointer'>
        TV Shows
      </p>
      <hr className=' pt-3 border-slate-500' />
      <p className=' pb-4 pl-5 opacity-75 hover:opacity-100 cursor-pointer'>
        Movies
      </p>
      <hr className=' pt-3 border-slate-500' />
      <p className=' pb-4 pl-5 opacity-75 hover:opacity-100 cursor-pointer'>
        Kids
      </p>
    </div>
  )
}

export default MobileNav

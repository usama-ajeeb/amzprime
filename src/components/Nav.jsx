import React, { useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import MobileNav from './MobileNav'

function Nav({ SetToggler, toggler }) {
  const [searchVisible, setSearchVisible] = useState(true)
  const [mobileNavToggler, setMobileNavToggler] = useState(false)
  const navRef = useRef(true)

  const SearchVisiblityHandler = () => {
    if (!searchVisible) {
      setSearchVisible(true)
    } else {
      setSearchVisible(false)
    }
  }

  const NavTogglerHandler = () => {
    if (!mobileNavToggler) {
      setMobileNavToggler(true)
    } else {
      setMobileNavToggler(false)
    }
  }

  const toggleHandler = () => {
    navRef.current.valueOf.bind()
    if (!toggler) {
      SetToggler(true)
    } else {
      SetToggler(false)
    }
  }

  return (
    <>
      <nav
        onClick={() =>
          (toggler && SetToggler(false)) ||
          (mobileNavToggler && setMobileNavToggler(false))
        }
        className='fixed top-0 justify-between w-screen flex items-center bg-secondary py-5 px-3 lg:px-16 z-40'
      >
        {/* Left */}

        <div className='flex items-center gap-x-6'>
          <div className='relative'>
            <img src='/logo.svg' alt='' className=' h-[40px] w-[111px] ' />
          </div>
          {/* On Small screen */}
          <div
            onClick={NavTogglerHandler}
            className='flex items-center gap-x-1 lg:hidden'
          >
            <p className=' text-slate-300 text-xl cursor-pointer'>Browse</p>
            {mobileNavToggler ? (
              <RiArrowUpSFill size={18} color='#6c7983' />
            ) : (
              <RiArrowDownSFill size={18} color='#6c7983' />
            )}
          </div>
          {/* On Large */}
          <div className='lg:flex items-center text-[#DDDFD2] font-semibold text-xl gap-x-3 hidden'>
            <p className='text-white border-b-[1px] cursor-pointer'>Home</p>
            <p className='hover:text-white cursor-pointer'>TV Shows</p>
            <p className='hover:text-white cursor-pointer'>Movies</p>
            <p className='hover:text-white cursor-pointer'>Kids</p>
          </div>
        </div>
        {/* right */}
        <div className='flex items-center gap-x-4'>
          {/* Search */}
          <div className=' lg:border-[1px] border-slate-400 hover:border-slate-200 flex items-center pl-2 gap-x-2 py-2 cursor-pointer'>
            <BsSearch
              size={20}
              color=''
              className=' text-slate-200 hover:text-slate-50'
              onClick={SearchVisiblityHandler}
            />
            <input
              type='text'
              className={`bg-transparent outline-none text-white ${
                searchVisible ? 'hidden' : 'w-[180px]'
              } lg:block`}
              placeholder='Search'
            />
          </div>
          <div
            ref={navRef}
            onClick={toggleHandler}
            className='flex items-center gap-x-2 text-white cursor-pointer'
          >
            <img
              class='inline object-cover w-8 h-8 rounded-full '
              src='https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
              alt='Profile image'
            />
            <p>harisJs</p>
            {!toggler ? (
              <RiArrowDownSFill size={18} color='#6c7983' />
            ) : (
              <RiArrowUpSFill size={18} color='#6c7983' />
            )}
          </div>
        </div>
      </nav>
      {mobileNavToggler && <MobileNav />}
    </>
  )
}

export default Nav

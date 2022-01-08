import { useState } from 'react'
import ImgSlider from './components/ImgSlider'
import Nav from './components/Nav'
import PreviewBottomCard from './components/Rows/PreviewBottomCard'
import Row from './components/Rows/Row'
import Tooltip from './components/Tooltip'
import { Previews } from './HeaderImages'
import { Carousel } from '@trendyol-js/react-carousel'
import { MdOutlineArrowForwardIos, MdArrowBackIos } from 'react-icons/md'
function App() {
  const RightArrow = (
    <MdOutlineArrowForwardIos
      className='   flex h-40  cursor-pointer mt-14  lg:mt-40'
      size={40}
      color='white'
    />
  )
  const LeftArrow = (
    <MdArrowBackIos
      className='   flex h-40 hover:bg-transparent cursor-pointer mt-14  lg:mt-40 '
      size={40}
      color='white'
    />
  )
  const [toggler, SetToggler] = useState(false)
  return (
    <div className=' flex flex-col bg-[#0F171E]'>
      <header>
        <Nav SetToggler={SetToggler} toggler={toggler} />
        {toggler && <Tooltip />}
        <ImgSlider />
      </header>
      <main>
        {/* movie genres*/}
        <section className='  mt-10 z-0'>
          <Row />
        </section>
        <section className=' '>
          <div className='flex flex-col ml-10'>
            <div className='flex items-center text-white text-2xl gap-x-2 pb-5'>
              <img
                src='https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4._CB509553088_.png'
                alt=''
                className=' h-6'
              />
              <h1>Previews for you</h1>
            </div>
          </div>
          {/* video */}
          <Carousel
            show={1}
            slide={1}
            rightArrow={RightArrow}
            leftArrow={LeftArrow}
            swiping={true}
            className='  overflow-visible top-48  z-10 flex '
          >
            {Previews.map((i) => (
              <PreviewBottomCard
                video={i.video}
                img={i.img}
                ratting={i.rating}
                title={i.title}
                id={i.id}
                type={i.type}
              />
            ))}
          </Carousel>
        </section>

        {/* See more button with loading spinner */}
        <section className=' text-white hover:bg-slate-800 cursor-pointer bg-slate-600 text-center py-3 container mr-auto ml-auto my-7 rounded-xl flex justify-center'>
          <button className='text-xl font-semibold '>Load more</button>
        </section>
      </main>
      <footer className=''>
        <div className='flex flex-col items-center gap-y-3'>
          <img src='/logo.svg' alt='' className='h-[40px] w-[111px]' />
          <div className=' flex gap-x-3 text-sky-400'>
            <p>Terms and Privacy Notice</p>
            <p>Send us feedback</p>
            <p>Help</p>

            <p className=' text-slate-400'>
              © 1996-2021, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react'
import ImgSlider from './components/ImgSlider'
import Nav from './components/Nav'
import Row from './components/Rows/Row'
import Tooltip from './components/Tooltip'
import VideoPlayer from './components/VideoPlayer'

function App() {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
url(https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f0f36490fec517be423a1788405fee0ea397884f02bf8df7843a5c9f56b663b7._RI_V_TTW_SX1500_BL40_FMJPG_.jpg)`,

    backgroundSize: 'cover',
    height: '50vh',
  }
  const [toggler, SetToggler] = useState(false)
  return (
    <div className='flex flex-col bg-[#0F171E] w-screen overflow-hidden'>
      <header>
        <Nav SetToggler={SetToggler} toggler={toggler} />
        {toggler && <Tooltip />}
        <ImgSlider />
      </header>
      <main>
        {/* movie genres*/}
        <section className='  container ml-auto mr-auto'>
          <Row />
        </section>
        <section className=' container ml-auto mr-auto my-8'>
          <div className='flex items-center text-white text-2xl gap-x-2 pb-5'>
            <img
              src='https://m.media-amazon.com/images/G/01/digital/video/global/prime-logo-large-v4._CB509553088_.png'
              alt=''
              className=' h-6'
            />
            <h1>Previews for you</h1>
          </div>
          <div className=' flex flex-col lg:flex-row py-32'>
            <div className=' h-80 w-[700px]' style={backgroundStyle}></div>
            {/* Video component */}
            <VideoPlayer />
          </div>
        </section>

        {/* See more button with loading spinner */}
        <section className=' text-white hover:bg-slate-800 cursor-pointer bg-slate-600 text-center py-3 container mr-auto ml-auto my-7 rounded-xl flex justify-center'>
          <button className='text-xl font-semibold '>Load more</button>
        </section>
      </main>
      <footer>
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

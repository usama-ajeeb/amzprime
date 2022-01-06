import PreviewCard from './PreviewCard'
import LeftArrow from '../../icons/left-arrow.svg'
import RightArrow from '../../icons/right-arrow.svg'

import FetchMovies from '../../request'
import React, { useCallback, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SmallCard from './SmallCard'
import { watchInYourLang } from '../../HeaderImages'

const BASE_URL = 'https://image.tmdb.org/t/p/original/'

function Row() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt='prevArrow' {...props} />
  )

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt='nextArrow' {...props} />
  )
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  }
  const [rec, setRec] = useState([])
  const [trending, setTrending] = useState([])
  const [family, setFamily] = useState([])
  const [hindi, setHindi] = useState([])

  const Fetcher = useCallback(() => {
    FetchMovies().then((m) => {
      setRec(m.Recommended?.results)
      setTrending(m.Trending?.results)
      setFamily(m.KidsAndFamily?.results)
      setHindi(m.Hindi?.results)
    })
  }, [])

  useEffect(() => {
    Fetcher()

    return () => {
      Fetcher()
    }
  }, [])
  return (
    <div className='flex flex-col  '>
      <div className=''>
        <h1 className=' text-xl pb-3 pt-5 font-semibold text-white'>
          Watch next TV and movies
        </h1>

        <div className='flex gap-x-2 h-40 '>
          {rec?.map((i) => (
            <PreviewCard
              key={i.backdrop_path}
              img={`${BASE_URL + i.backdrop_path}`}
              title={i.title}
              description={i.overview}
              date={i.release_date}
            />
          ))}
        </div>
      </div>
      <div className=''>
        <h1 className=' text-xl pb-3 pt-5 font-semibold text-white'>
          Kids and family movies
        </h1>

        <div className='flex gap-x-2 h-40 '>
          {trending?.map((i) => (
            <PreviewCard
              key={i.backdrop_path}
              img={`${BASE_URL + i.backdrop_path}`}
              title={i.title}
              description={i.overview}
              date={i.release_date}
            />
          ))}
        </div>
      </div>
      <div className=''>
        <h1 className=' text-xl pb-3 pt-5 font-semibold text-white'>
          Watch in your Language
        </h1>

        <div className='flex gap-x-2 h-40 '>
          {watchInYourLang.map((i) => (
            <SmallCard id={i.id} url={i.url} lang={i.lang} />
          ))}
        </div>
      </div>
      <div className=' '>
        <h1 className=' text-xl pb-3 pt-5 font-semibold text-white'>
          Recomended movies
        </h1>

        <div className='flex gap-x-2 h-40  '>
          {hindi?.map((i) => (
            <PreviewCard
              key={i.backdrop_path}
              img={`${BASE_URL + i.backdrop_path}`}
              title={i.title}
              description={i.overview}
              date={i.release_date}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Row

import PreviewCard from './PreviewCard'
import { Carousel } from '@trendyol-js/react-carousel'
import { MdOutlineArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

import React from 'react'

import SmallCard from './SmallCard'
import { Movies, watchInYourLang } from '../../HeaderImages'

const RightArrow = (
  <MdOutlineArrowForwardIos
    className='   flex h-40  cursor-pointer'
    size={40}
    color='white'
  />
)
const LeftArrow = (
  <MdArrowBackIos
    className='   flex h-40 hover:bg-transparent cursor-pointer '
    size={40}
    color='white'
  />
)

function Row() {
  return (
    <div className=' relative mt-1 h-[750px] flex flex-col'>
      <Carousel
        show={6}
        slide={3}
        rightArrow={RightArrow}
        leftArrow={LeftArrow}
        swiping={true}
        className=' absolute overflow-visible top-48  z-10 flex '
      >
        {Movies?.map((i) => (
          <PreviewCard
            key={i.backdrop_path}
            img={i.pic}
            title={i.title}
            description={i.overview}
            date={i.year}
          />
        ))}
      </Carousel>
      <Carousel
        show={6}
        slide={3}
        rightArrow={RightArrow}
        leftArrow={LeftArrow}
        swiping={true}
        className=' absolute overflow-visible  z-20 '
      >
        {Movies?.map((i) => (
          <PreviewCard
            key={i.backdrop_path}
            img={i.pic}
            title={i.title}
            description={i.des}
            date={i.year}
          />
        ))}
      </Carousel>
      <Carousel
        show={9}
        slide={1}
        rightArrow={RightArrow}
        leftArrow={LeftArrow}
        swiping={true}
        className=' absolute overflow-visible top-96 z-0 '
      >
        {watchInYourLang.map((i) => (
          <SmallCard id={i.id} url={i.url} lang={i.lang} />
        ))}
      </Carousel>
      <Carousel
        show={6}
        slide={3}
        rightArrow={RightArrow}
        leftArrow={LeftArrow}
        swiping={true}
        className=' absolute overflow-visible top-[540px]  z-20 '
      >
        {Movies?.map((i) => (
          <PreviewCard
            key={i.backdrop_path}
            img={i.pic}
            title={i.title}
            description={i.des}
            date={i.year}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Row

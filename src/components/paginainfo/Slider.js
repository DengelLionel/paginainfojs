import React from 'react'
import Image from 'next/legacy/image'
import IconArrow from '../icons/IconArrow'

const Slider = ({imagen,titulo}) => {
  return (
    <section className='relative w-full h-[500px] lg:h-[600px]'>
      <Image className='brightness-50 '  objectFit='cover' layout='fill' src={imagen}/>
      <div className='w-full h-full z-[20] flex flex-col justify-end items-center pb-[35px] relative lg:items-start lg:pl-[35px] lg:justify-center'>
        {/* <h1 className='text-white font-roboto font-medium text-center md:text-[20px]'>{titulo}</h1> */}
        <button className='bg-blueOne w-[216px] h-[47px] text-blancoOne rounded-full flex flex-row items-center justify-center font-semibold hover:bg-blancoOne hover:text-black gap-[10px]'>Ver más información<IconArrow fill={`#D9D9D9`}/></button>
      </div>
    </section>
  )
}

export default Slider;
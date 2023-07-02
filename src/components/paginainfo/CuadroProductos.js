import React from 'react'
import Link from 'next/link'
import Image from 'next/legacy/image'
import IconArrow from '../icons/IconArrow'
const CuadroProductos = ({imagen,titulo,link}) => {
  return (

    <div className="relative w-[322px] h-[354px] shadow-md rounded-md bg-blancoTwo flex flex-col justify-center items-center p-[10px] group">
      <Link href={link}>
        <div className='w-[265px] h-[247px] relative'>
          <Image src={imagen} layout='fill' objectFit='cover' alt='image destacado'/>
        </div>
        <div className='border-t-[1px] border-blueOne w-full pl-[10px] pr-[10px] pt-[7px] '>
          <h2 className='text-blueOne text-center text-[16px] font-semibold mt-[26px] mb-[14px] lg:text-[20px]'>{titulo}</h2>
        </div>
      </Link>
      <div className="absolute  transition duration-200" />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200  py-2 px-4 rounded text-center cursor-pointer">
        <Link className='bg-blancoTwo border-[2px] border-blueOne  w-[230px] h-[47px]  text-[16px] rounded-full flex flex-row items-center justify-center font-semibold  text-blueOne gap-[30px] ' href={link}>Ver más información <IconArrow fill={`#2F6AAD`}/></Link>
      </div>
    </div>
 
  )
}

export default CuadroProductos
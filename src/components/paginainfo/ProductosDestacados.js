import React from 'react'
import IconArrow from '../icons/IconArrow'
import Image from 'next/legacy/image'
const ProductosDestacados = () => {
  return (
    <div className='flex flex-col items-center pt-[25px] '>
          <h2 className='text-negro font-extrabold md:text-[20px] lg:text-[24px]'>ProductosDestacados</h2>
          <div className='flex flex-wrap gap-[16px] justify-center items-center mb-[20px] mt-[20px] w-full'>
         <div className='w-[322px] h-[354px] shadow-md rounded-md bg-blancoTwo flex flex-col justify-center items-center'>
            <div className='w-[265px] h-[247px] relative'>
            <Image src={'https://res.cloudinary.com/darps1cta/image/upload/v1687647334/nexo/product_ixomna.jpg'} layout='fill' objectFit='cover' alt='image destacado'/>
            </div>
            <div className='border-t-[1px] border-blueOne w-full'>
            <h2 className='text-blueOne text-center text-[16px] font-semibold mt-[26px] mb-[14px] lg:text-[20px]'>Monitor signos vitales veterinario- 5 parámetros</h2>
            </div>
            
           
         </div>

         </div>
         <button className='bg-blueOne  w-[216px] h-[47px] text-blancoOne text-[16px] rounded-full flex flex-row items-center justify-center font-semibold hover:bg-blancoOne hover:text-black gap-[30px] '>VER TODOS <IconArrow fill={`#EEEFF3`}/></button>
        </div>
  )
}

export default ProductosDestacados
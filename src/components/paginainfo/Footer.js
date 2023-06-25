import React from 'react'
import IconFacebook from '../icons/IconFacebook'
import IconInstagram from '../icons/IconInstagram'
import IconTiktok from '../icons/IconTiktok'
import IconYoutuve from '../icons/IconYoutuve'
const Footer = () => {
  return (
    <div className='bg-plomo text-blancoOne font-medium text-[16px] flex flex-col items-center justify-center mt-[180px] pt-[38px] pb-[22px]'>
        <div className='flex flex-row items-center gap-[35px]'>
        <span>Siguenos en:</span>
        <div className='flex flex-row gap-[14px] items-center'>
        <IconFacebook/>
        <IconInstagram/>
        <IconTiktok/>
        <IconYoutuve/>
        </div>
        </div>
        <p className='text-center w-[314px] mt-[21px]'>NEXOMEDIC Todos los derechos reservados 2023</p>
    </div>
  )
}

export default Footer
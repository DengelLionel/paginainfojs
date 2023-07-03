import React from 'react'
import IconFacebook from '../icons/IconFacebook'
import IconInstagram from '../icons/IconInstagram'
import IconTiktok from '../icons/IconTiktok'
import IconYoutuve from '../icons/IconYoutuve'
const Footer = () => {
    return (
        <div className="bg-blueTwo text-gray-600 font-normal font-notosans text-[16px] flex flex-col items-center justify-center mt-[180px] pt-[22px] pb-[22px] lg:flex-row lg:items-center lg:pb-[10px] lg:pt-[15px]">
            <div className="flex flex-row items-center gap-[35px]">
                <span>Siguenos en:</span>
                <div className="flex flex-row gap-[14px] items-center">
                    <IconFacebook fill="#7C7C8F" />
                    <IconInstagram fill="#7C7C8F" />
                    <IconTiktok fill="#7C7C8F" />
                    <IconYoutuve fill="#7C7C8F" />
                </div>
            </div>
            <span className="text-center w-[314px] mt-[10px] lg:w-[400px]  lg:mt-0">
                NEXOMEDIC Todos los derechos reservados 2023
            </span>
        </div>
    )
}

export default Footer

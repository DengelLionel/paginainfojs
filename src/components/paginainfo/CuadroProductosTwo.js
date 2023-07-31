import React from 'react'
import Image from 'next/image'

const CuadroProductosTwo = ({ imagen, titulo, link, nuevo, oferta }) => {
    const handleClick = e => {
        e.preventDefault()
        window.location.href = link && link // esto recargará la página
    }
    return (
        <div
            onClick={handleClick}
            className="relative w-[155px] h-[310px] lg:w-[279px] lg:h-[330px] border-[2px] border-gray-400 border-opacity-25 shadow-lg lg:shadow-2xl rounded-md bg-white flex flex-col justify-center items-center p-[10px]">
            {parseInt(nuevo && nuevo) === 1 && (
                <div className="absolute cursor-pointer z-[700] text-white flex items-center justify-center font-bold text-[10px] top-0 left-0 bg-red-500 rounded-full w-[45px] h-[45px]">
                    NUEVO!
                </div>
            )}
            {parseInt(oferta && nuevo) === 1 && (
                <div className="absolute cursor-pointer z-[700] text-white flex items-center justify-center font-bold text-[10px] top-0 right-0 bg-green-500 rounded-md w-[60px] h-[40px]">
                    OFERTA!
                </div>
            )}
            <div className="absolute top-0 flex flex-col items-center justify-center">
                <div className="flex lg:hidden">
                    <Image
                        width={109}
                        height={136}
                        src={imagen && imagen}
                        priority={true}
                        alt={titulo && titulo}
                    />
                </div>
                <div className="hidden lg:block">
                    <Image
                        width={230}
                        height={200}
                        src={imagen && imagen}
                        priority={true}
                        alt={titulo && titulo}
                    />
                </div>
                <div className="border-t-[1px] border-blueOne w-full  pt-[5px] ">
                    <h2 className="text-blueOne text-center text-sm font-semibold mb-[14px] lg:text-md">
                        {titulo && titulo}
                    </h2>
                </div>
            </div>

            <button className="absolute bottom-[10px] from-blueOne  to-sky-500 bg-gradient-to-r  text-center w-auto h-[47px] p-[10px] text-[16px] rounded-full  font-semibold  text-white  ">
                Más información
            </button>
        </div>
    )
}

export default CuadroProductosTwo

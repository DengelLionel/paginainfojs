import React from 'react'
import Image from 'next/legacy/image'
import { useEffect } from 'react'
const CuadroProductos = ({ imagen, titulo, link, nuevo, oferta }) => {
    useEffect(() => {}, [nuevo, oferta])
    const handleClick = e => {
        e.preventDefault()
        window.location.href = link // esto recargará la página
    }
    return (
        <div
            onClick={handleClick}
            className="relative cursor-pointer w-[322px] h-[354px] lg:w-[279px] lg:h-[330px] border-[2px] border-gray-400 border-opacity-25 shadow-lg lg:shadow-2xl rounded-md bg-blancoTwo flex flex-col justify-center items-center p-[10px] group">
            {parseInt(nuevo) === 1 && (
                <div className="absolute cursor-pointer z-[700] text-white flex items-center justify-center font-bold text-[10px] top-0 left-0 bg-red-500 rounded-full w-[50px] h-[50px]">
                    NUEVO!
                </div>
            )}

            {parseInt(oferta) === 1 && (
                <div className="absolute cursor-pointer z-[700] text-white flex items-center justify-center font-bold text-[10px] top-0 right-0 bg-green-500 rounded-md w-[70px] h-[40px]">
                    OFERTA!
                </div>
            )}
            <div className="absolute  top-0 flex flex-col items-center justify-center">
                <div className="w-[265px] h-[247px] lg:w-[230px] lg:h-[200px] relative">
                    <Image
                        src={imagen}
                        layout="fill"
                        objectFit="contain"
                        alt={titulo}
                    />
                </div>
                <div className="border-t-[1px] border-blueOne w-full pb-[10px] pt-[10px] ">
                    <h2 className="text-blueOne text-center text-sm font-semibold mb-[14px] lg:text-md">
                        {titulo}
                    </h2>
                </div>
            </div>
            <button className=" absolute bottom-[10px] from-blueOne  to-sky-500 bg-gradient-to-r  border-[2px] text-center w-auto h-[47px]  text-[16px] rounded-full p-[10px] font-semibold  text-white  ">
                Más información
            </button>
        </div>
    )
}

export default CuadroProductos

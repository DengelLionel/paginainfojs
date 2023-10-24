import React from 'react'
import Image from 'next/legacy/image'
import IconArrow from '../icons/IconArrow'
import { useHover } from '@/hooks/useHover'
const Slider = ({
    imagen_mobil,
    imagen_desktop,
    titulo,
    mobile,
    nombreenlace,
    subtitulo,
    enlace,
}) => {
    const [hoverRef, isHovered] = useHover()
    return (
        <section
            className={`relative w-full h-[500px] ${
                mobile ? 'md:hidden' : 'hidden md:block md:h-[600px]'
            }`}>
            {imagen_mobil != null || imagen_desktop != null ? (
                <Image
                    className="brightness-50 "
                    objectFit="cover"
                    layout="fill"
                    priority={true}
                    alt={titulo && titulo}
                    src={
                        mobile
                            ? imagen_mobil != null
                                ? imagen_mobil
                                : imagen_desktop
                            : imagen_desktop
                    }
                    quality={100}
                />
            ) : (
                <Image
                    className="brightness-50 "
                    objectFit="cover"
                    layout="fill"
                    priority={true}
                    alt={titulo && titulo}
                    src={
                        'https://res.cloudinary.com/dh9etf988/image/upload/v1695174693/cld-sample-2.jpg'
                    }
                    quality={100}
                />
            )}

            <div className="w-full h-full z-[20] flex flex-col justify-end items-center gap-[20px] pl-[16px] pr-[16px] pb-[35px] relative lg:items-start lg:pl-[100px] lg:justify-center">
                {titulo !== null && (
                    <h1 className="text-white font-bold text-lg text-center lg:text-2xl">
                        {titulo}
                    </h1>
                )}

                {subtitulo !== null && (
                    <h2 className="text-white font-medium text-md text-center lg:w-[500px] lg:text-left lg:text-lg ">
                        {subtitulo}
                    </h2>
                )}

                {nombreenlace !== null && (
                    <a
                        target="_blank"
                        href={enlace && enlace}
                        ref={hoverRef}
                        className="bg-blueOne w-auto p-[10px] h-[47px] text-blancoOne rounded-full flex flex-row transition-all duration-[500ms] items-center justify-center shadow-md font-semibold hover:bg-blueTwo hover:text-blueOne gap-[10px]"
                        rel="noreferrer">
                        {nombreenlace}
                        <IconArrow fill={isHovered ? '#2F6AAD' : '#fafafa'} />
                    </a>
                )}
            </div>
        </section>
    )
}

export default Slider

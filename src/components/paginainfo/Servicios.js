import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import IconArrow from '../icons/IconArrow'
const Servicios = () => {
    return (
        <div className="flex flex-col items-center pl-[16px] pr-[16px] pt-[25px]">
            {/*   <h2 className="text-blueOne font-bold md:text-[20px] lg:text-[24px]">
                Servicios
            </h2> */}
            <section className="flex flex-col md:flex-row-reverse gap-[20px] md:gap-[75px]">
                <Link
                    href={'/post-venta'}
                    className="flex flex-row items-center justify-center gap-[20px] mt-[12px]  lg:gap-[49px] lg:p-[10px] xl:p-[20px] transition-all duration-[500ms] lg:hover:bg-blueTwo lg:hover:shadow-lg">
                    <div className="relative w-[176px] h-[176px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px]">
                        <Image
                            src={
                                'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1688609788/NEXOMEDIC/POST_VENTA_2023_NEW_NEW_2023_jlrlez.png'
                            }
                            layout="fill"
                            objectFit="contain"
                            alt="imagen servicio"
                        />
                    </div>
                    <div className="flex flex-col justify-start h-[130px]">
                        <h3 className="text-blueOne text-[11px] font-bold lg:text-[20px]">
                            POST VENTA
                        </h3>
                        <p className="w-[150px] lg:w-[215px] text-negro text-[11px] lg:text-[16px]">
                            “Nuestros clientes son los mas importantes, es por
                            ello que la venta no finaliza con la entrega del
                            producto”
                        </p>
                        <button className="mt-[7px] flex flex-row items-center gap-[10px] rounded-full w-[132px]  text-blueOne font-semibold text-[11px] pl-[7px] pt-[4px] pb-[4px] text-center bg-blueTwo border-blueOne border-[1px] lg:border-2 md:w-[170px] md:text-sm md:p-[10px]">
                            Mas información <IconArrow fill={`#2F6AAD`} />
                        </button>
                    </div>
                </Link>

                <Link
                    href={'/servicio-tecnico'}
                    className="flex flex-row items-center gap-[10px] mt-[12px] md:flex-row-reverse lg:gap-[49px] lg:p-[10px] xl:p-[20px] transition-all duration-[500ms] lg:hover:bg-blueTwo lg:hover:shadow-lg">
                    <div className="flex flex-col justify-start h-[130px]">
                        <h3 className="text-blueOne text-[11px]  font-bold lg:text-[20px]">
                            SERVICIO TÉCNICO
                        </h3>
                        <p className="w-[150px] lg:w-[215px] text-negro text-[11px] lg:text-[16px]">
                            Contamos con un equipo de profesionales altamente
                            capacitados y preparados para poder brindar
                            asistencia de calidad.
                        </p>
                        <button className="mt-[7px] flex flex-row items-center gap-[10px] rounded-full w-[132px]  text-blueOne font-semibold text-[11px] pl-[7px] pt-[4px] pb-[4px] text-center bg-blueTwo border-blueOne border-[1px] lg:border-2 md:w-[170px] md:text-sm md:p-[10px]">
                            Mas información <IconArrow fill={`#2F6AAD`} />
                        </button>
                    </div>
                    <div className="relative w-[176px] h-[176px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px]">
                        <Image
                            src={
                                'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1688609787/NEXOMEDIC/servicio_tecnico_NEW_o67z49.png'
                            }
                            layout="fill"
                            objectFit="cover"
                            alt="imagen servicio"
                        />
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default Servicios

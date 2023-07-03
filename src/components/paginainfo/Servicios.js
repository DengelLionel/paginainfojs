import React from 'react'
import Image from 'next/legacy/image'
const Servicios = () => {
    return (
        <div className="flex flex-col items-center pt-[25px]">
            <h2 className="text-negro font-extrabold md:text-[20px] lg:text-[24px]">
                Servicios
            </h2>
            <section className="flex flex-col md:flex-row-reverse md:gap-[75px]">
                <div className="flex flex-row items-center gap-[7px] mt-[12px] lg:gap-[49px]">
                    <div className="relative w-[106px] h-[106px] lg:w-[180px] lg:h-[160px]">
                        <Image
                            src={
                                'https://res.cloudinary.com/darps1cta/image/upload/v1687641616/nexo/servicio2_p5imjh.jpg'
                            }
                            layout="fill"
                            objectFit="cover"
                            alt="imagen servicio"
                        />
                    </div>
                    <div>
                        <h3 className="text-blueOne font-extrabold lg:text-[20px]">
                            POST VENTA
                        </h3>
                        <p className="w-[215px] text-negro text-[12px] lg:text-[16px]">
                            “Nuestros clientes son los mas importantes, es por
                            ello que la venta no finaliza con la entrega del
                            producto”
                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-[7px] mt-[12px] md:flex-row-reverse lg:gap-[49px]">
                    <div>
                        <h3 className="text-blueOne font-extrabold lg:text-[20px]">
                            SERVICIO TÉCNICO
                        </h3>
                        <p className="w-[215px] text-negro text-[12px] lg:text-[16px]">
                            Contamos con un equipo de profesionales altamente
                            capacitados y preparados para poder brindar
                            asistencia de calidad.
                        </p>
                    </div>
                    <div className="relative w-[106px] h-[106px] lg:w-[180px] lg:h-[160px]">
                        <Image
                            src={
                                'https://res.cloudinary.com/darps1cta/image/upload/v1687641617/nexo/servicio1_umaptz.jpg'
                            }
                            layout="fill"
                            objectFit="cover"
                            alt="imagen servicio"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicios

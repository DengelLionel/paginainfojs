import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
const Servicio = () => {
    return (
        <div className="pt-[20px] pb-[20px] lg:pt-[30px] lg:pb-[120px] ">
            <div className="flex flex-col items-left lg:items-center lg:justify-left lg:flex-row lg:gap-[50px] bg-blueTwo p-[20px] lg:pb-[30px] lg:pt-[30px] lg:pr-[90px]  lg:pl-[90px]">
                <h1 className="text-xl lg:text-2xl font-bold mb-5  text-blueOne">
                    Servicio Técnico
                </h1>
                <p className="lg:mb-5 text-negro text-[11px] lg:text-md text-justify">
                    Contamos con un equipo de profesionales altamente
                    capacitados y preparados para poder brindar asistencia de
                    calidad.
                </p>
            </div>

            <section className="pt-[50px] flex flex-col items-center justify-center lg:flex-row lg:gap-[50px]">
                <article className="w-[200px] flex flex-col gap-[15px] lg:w-[483px] items-end justify-end lg:w-full">
                    <h2 className="text-2xl lg:w-[147px] text-end lg:text-2xl font-bold mb-5  text-blueOne">
                        Revisión y Diagnostico
                    </h2>
                    <p className="lg:mb-5 text-negro   text-[11px] lg:text-md text-right">
                        Realizamos una completa revisión del equipo a fin de
                        llegar a un diagnóstico que determine el problema
                        encontrado. El costo de este servicio será restado del
                        monto total del mantenimiento ya sea preventivo y/o
                        correctivo según el informe de revisión y diagnóstico.
                    </p>
                    <span className="text-blueOne text-sm font-semibold">
                        ¡Necesito el servicio!
                    </span>
                    <Link
                        className=" w-[200px] bg-blueOne text-center text-white text-sm font-medium border-[1px] border-transparent py-2 px-4 rounded-full hover:bg-blueTwo hover:text-blueOne hover:border-blueOne transition duration-300 mb-[20px]"
                        href="/contactanos">
                        Contactar a un asesor
                    </Link>
                </article>
                <section className="relative w-full h-[195px] lg:w-[440px] lg:h-[331px] xl:w-[500px] xl:h-[376px]">
                    <Image
                        src={
                            'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1690257979/serv-tecnico-_rsqjvf.jpg'
                        }
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </section>
            </section>
            {/* SIGUIENTE SERVICIO */}
            <section className="pt-[50px] flex flex-col items-center justify-center lg:flex-row lg:gap-[50px]">
                <section className="relative w-full h-[195px] mb-[20px] lg:mb-0 lg:w-[440px] lg:h-[331px] xl:w-[500px] xl:h-[376px]">
                    <Image
                        src={
                            'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1690257979/serv-tecnico-1_z4ggpo.jpg'
                        }
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </section>
                <article className="w-[200px] flex flex-col gap-[15px] lg:w-[483px] items-end justify-end lg:w-full lg:items-start lg:justify-start">
                    <h2 className="text-2xl lg:w-[147px] text-end lg:text-2xl lg:text-start font-bold mb-5  text-blueOne">
                        Mantenimiento Preventivo
                    </h2>
                    <p className="lg:mb-5 text-negro   text-[11px] lg:text-md text-right lg:text-start">
                        Mantener operativo su equipo en todo momento. Es
                        sinónimo de seguridad y precisión. En NEXOMEDIC
                        ofrecemos a nuestros Clientes un Programa de
                        Mantenimiento Preventivo y Asistencia Contratada, como
                        también contratos de mantenimiento anuales que les
                        garantizaran un buen funcionamiento a sus equipos
                        durante todo el periodo de contrato.
                    </p>
                    <span className="text-blueOne text-sm font-semibold">
                        ¡Necesito el servicio!
                    </span>
                    <Link
                        className=" w-[200px] bg-blueOne text-center text-white text-sm font-medium border-[1px] border-transparent py-2 px-4 rounded-full hover:bg-blueTwo hover:text-blueOne hover:border-blueOne transition duration-300 mb-[20px]"
                        href="/contactanos">
                        Contactar a un asesor
                    </Link>
                </article>
            </section>

            {/* SIGUIENTE SERVICIO */}
            <section className="pt-[50px] flex flex-col items-center justify-center lg:flex-row lg:gap-[50px]">
                <article className="w-[200px] flex flex-col gap-[15px] lg:w-[483px] items-end justify-end lg:w-full ">
                    <h2 className="text-2xl lg:w-[188px] text-end lg:text-right lg:text-2xl font-bold mb-5  text-blueOne ">
                        Mantenimiento Correctivo
                    </h2>
                    <p className="lg:mb-5 text-negro   text-[11px] lg:text-md text-right">
                        Mediante el proceso de reparación el equipo se interna
                        en nuestra área de servicio técnico. Se cambiaran las
                        piezas con repuestos originales de fábrica si es
                        necesario. Luego se llevará a cabo el proceso de
                        calibración predeterminado por el fabricante. Cumpliendo
                        los parámetros de calidad para realizar sus funciones.
                        Al finalizar se emitirá un informe técnico detallando
                        las tareas ejecutadas.
                    </p>
                    <span className="text-blueOne text-sm font-semibold">
                        ¡Necesito el servicio!
                    </span>
                    <Link
                        className=" w-[200px] bg-blueOne text-center text-white text-sm font-medium border-[1px] border-transparent py-2 px-4 rounded-full hover:bg-blueTwo hover:text-blueOne hover:border-blueOne transition duration-300 mb-[20px]"
                        href="/contactanos">
                        Contactar a un asesor
                    </Link>
                </article>
                <section className="relative w-full h-[195px] mb-[20px] lg:mb-0 lg:w-[440px] lg:h-[331px] xl:w-[500px] xl:h-[376px]">
                    <Image
                        src={
                            'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1690257979/serv-tecnico-2_rloxyw.jpg'
                        }
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                    />
                </section>
            </section>
        </div>
    )
}

export default Servicio

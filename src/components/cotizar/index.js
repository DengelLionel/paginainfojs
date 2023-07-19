import React from 'react'
import FormularioCotizar from './FormularioCotizar'
import Image from 'next/legacy/image'
const Cotizar = () => {
    return (
        <div className="p-[16px] lg:pl-[50px]">
            <h1 className="text-blueOne text-left  font-bold lg:text-lg">
                COTIZAR
            </h1>
            <div className="flex flex-col gap-[20px] lg:flex-row lg:gap-[30px] lg:items-center lg:justify-center pb-[100px]">
                <FormularioCotizar />
                <div className="w-[300px] lg:w-[450px] flex flex-col gap-[20px] items-center justify-center">
                    <h2 className="text-blueOne text-center font-bold lg:text-lg">
                        "GRACIAS POR SU INTERES EN NUESTROS PRODUCTOS Y/O
                        SERVICIOS"
                    </h2>
                    <div className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px]">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            alt="cotizar"
                            src="https://res.cloudinary.com/dxvqyh8ib/image/upload/v1689704968/COTIZAR_WEB_2023_gehheo.png"
                        />
                    </div>
                    <p className="text-plomo text-sm">
                        Le solicitamos llenar el Formulario, un ejecutivo
                        comercial se comunicará con usted lo más pronto posible
                        para brindarle la asistencia necesaria.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cotizar

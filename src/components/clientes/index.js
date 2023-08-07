import React from 'react'
import Image from 'next/legacy/image'
import { useDatosClientes } from '@/hooks/useDatosMarca'

const TodoCliente = () => {
    const { datos } = useDatosClientes()
    return (
        <div className="p-[16px] pt-[100px] lg:pl-[100px] lg:pt-[100px] lg:pb-[100px] lg:pr-[100px]">
            <h1 className="text-xl font-bold mb-5 text-blueOne">CLIENTES</h1>
            <p className="lg:mb-5 text-sm lg:text-md text-justify p-[30px] bg-blueTwo">
                Nuestro compromiso con la innovación y la excelencia nos ha
                posicionado como el socio estratégico en la industria de
                Equipamiento médico. Trabajamos con los hospitales, clínicas y
                consultorios médicos más importantes del país, lo que nos
                permite mejorar la atención a los pacientes y contribuir al
                logro de resultados óptimos en el cuidado de la salud.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {datos?.map((marca, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[100px] sm:h-[200px] lg:h-[150px] lg:w-[280px] p-2 border-2 border-gray-200 rounded-lg shadow-lg">
                        <Image
                            layout="fill"
                            alt="cliente"
                            objectFit="contain"
                            quality={100}
                            src={marca.imagen}
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoCliente

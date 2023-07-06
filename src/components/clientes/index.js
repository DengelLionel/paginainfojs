import React from 'react'
import Image from 'next/legacy/image'
import { useDatosMarca } from '@/hooks/useDatosMarca'

const TodoCliente = () => {
    const { datos } = useDatosMarca()
    return (
        <div className="p-[16px] lg:pl-[100px] lg:pt-[100px] lg:pb-[100px] lg:pr-[100px]">
            <h1 className="text-3xl font-bold mb-5 text-blueOne">CLIENTES</h1>
            <p className="mb-5 text-lg text-justify">
                Trabajamos con las mejores marcas del mercado con el fin de
                garantizar a nuestros clientes Productos de alta calidad a los
                mejores precios todas nuestras marcas cuentan con cerfificación
                ISO ,FDA,CE
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
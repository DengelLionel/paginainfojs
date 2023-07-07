import React from 'react'
import Link from 'next/link'
const InfoProducto = ({ datos }) => {
    return (
        <div className="flex flex-col justify-center items-left lg:h-[250px] lg:justify-between">
            <h1 className="text-blueOne font-bold text-center text-[20px] lg:text-[26px]">
                {datos?.[0]?.nombre}
            </h1>
            <section className="flex flex-col p-[16px] gap-[10px]">
                <span>
                    <strong className="text-blueOne font-bold">Marca:</strong>{' '}
                    <span>{datos?.[0]?.marca}</span>{' '}
                </span>
                <span>
                    <strong className="text-blueOne font-bold">Modelo:</strong>{' '}
                    <span>{datos?.[0]?.modelo}</span>
                </span>
                <span>
                    <strong className="text-blueOne font-bold">
                        Procedencia:
                    </strong>{' '}
                    <span>{datos?.[0]?.procedencia}</span>
                </span>
            </section>
            <Link
                href={'/cotizar'}
                type="button"
                className=" text-center border border-blueOne bg-blueOne text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">
                COTIZAR
            </Link>
        </div>
    )
}

export default InfoProducto

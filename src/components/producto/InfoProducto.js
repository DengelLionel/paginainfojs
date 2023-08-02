import React from 'react'
import Link from 'next/link'
const InfoProducto = ({ datos }) => {
    return (
        <div className="flex flex-col justify-center items-left lg:items-center lg:h-[250px] lg:justify-between">
            <h1 className="text-blueOne font-bold text-center text-[20px] lg:text-[26px]">
                {datos?.[0]?.nombre}
            </h1>
            <section className="flex flex-col p-[16px] gap-[10px]">
                <span>
                    <strong className="text-blueOne text-sm font-bold">
                        Marca:
                    </strong>{' '}
                    <span className="text-sm text-plomo">
                        {datos?.[0]?.marca}
                    </span>{' '}
                </span>
                <span>
                    <strong className="text-blueOne text-sm font-bold">
                        Modelo:
                    </strong>{' '}
                    <span className="text-sm text-plomo">
                        {datos?.[0]?.modelo}
                    </span>
                </span>
                <span>
                    <strong className="text-blueOne  text-sm font-bold ">
                        Procedencia:
                    </strong>{' '}
                    <span className="text-sm text-plomo">
                        {datos?.[0]?.procedencia}
                    </span>
                </span>
                {parseInt(datos?.[0]?.precio) != 0 ||
                    (parseFloat(datos?.[0]?.precio) != 0.0 && (
                        <span>
                            <strong className="text-blueOne  text-xl font-bold ">
                                s/. {datos?.[0]?.precio}
                            </strong>
                        </span>
                    ))}
                <span>
                    <strong className="text-blueOne  text-xl font-bold ">
                        s/ 45
                    </strong>
                </span>
            </section>
            <Link
                href={'/cotizar'}
                type="button"
                className=" text-sm text-center w-[170px] border border-blueOne bg-blueOne text-white rounded-full px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">
                COTIZAR
            </Link>
        </div>
    )
}

export default InfoProducto

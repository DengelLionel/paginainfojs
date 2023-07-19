import React from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'
const Descripcion = ({ datos }) => {
    const descripcion = datos?.[0]?.descripcion
    if (typeof descripcion !== 'string') {
        return null
    }

    return (
        <div className="flex flex-col w-full lg:w-[800px] justify-center items-left lg:justify-start lg:items-start">
            <h3 className="text-blue-700 font-bold">Descripción:</h3>
            <div className="descripcion">{parse(descripcion)}</div>
            <Link
                href={datos?.[0]?.ficha_tecnica}
                download={true}
                class="text-sm border border-blueOne bg-blueOne text-white rounded-full px-4 py-2 m-2 transition text-center duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline w-[170px]">
                Ficha Técnica
            </Link>
        </div>
    )
}

export default Descripcion

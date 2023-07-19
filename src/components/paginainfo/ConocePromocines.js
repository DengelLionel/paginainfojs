import React from 'react'
import Link from 'next/link'
const ConocePromociones = () => {
    return (
        <Link
            href={'/contactanos'}
            className="hidden md:flex md:w-[120px] md:h-[120px] md:rounded-full md:bg-plomo  md:justify-center md:items-center md:fixed md:bottom-[280px] md:right-0 md:z-[9998] md:mb-4 md:mr-4">
            <div className="w-[110px] h-[110px] rounded-full bg-plomo border-[1px] border-blancoOne flex justify-center items-center">
                <span className="text-blancoOne text-[14px] text-center">
                    CONOCE nuestras Promociones del mes
                </span>
            </div>
        </Link>
    )
}

export default ConocePromociones

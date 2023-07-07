import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
const ImagenPost = () => {
    return (
        <div>
            <div className="relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]">
                <Image
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    src={
                        'https://nexomedic.com.pe/wp-content/uploads/Nexo-Medic_inicio_nosotros_01.png'
                    }
                />
            </div>
            <h2 className="text-blueOne font-medium text-xl">
                Para consultas llamar al:
            </h2>
            <Link
                href={'tel:+51999780748'}
                className="w-[200px] lg:ml-[50px] lg:mt-[15px] lg:mb-[15px] text-center bg-blueOne text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                type="submit">
                999-780-748
            </Link>
            <h2 className="text-blueOne font-medium text-xl text-center">
                serviciotecnico@nexomedic.com.pe
            </h2>
        </div>
    )
}

export default ImagenPost

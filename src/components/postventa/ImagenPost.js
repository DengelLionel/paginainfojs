import React from 'react'
import Image from 'next/legacy/image'
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
            <button
                className="w-[200px] lg:ml-[50px] lg:mt-[15px] lg:mb-[15px] bg-blueOne text-white text-sm font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
                type="submit">
                999-780-748
            </button>
            <h2 className="text-blueOne font-medium text-xl text-center">
                serviciotecnico@nexomedic.com.pe
            </h2>
        </div>
    )
}

export default ImagenPost

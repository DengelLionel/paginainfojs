import React from 'react'
import Image from 'next/legacy/image'
const BannerProducto = () => {
    return (
        <div className="relative w-full h-[300px]">
            <Image
                objectFit="cover"
                layout="fill"
                src={
                    'https://res.cloudinary.com/darps1cta/image/upload/v1687643443/nexo/medico-tecnico-laboratorio-analizando-evolucion-virus-tableta-digital-equipo-cientificos-que-llevan-cabo-desarrollo-vacunas-utilizando-alta-tecnologia-investigar-tratamiento-contra-pandem_hykvlk.jpg'
                }
                alt="banner"
            />
        </div>
    )
}

export default BannerProducto

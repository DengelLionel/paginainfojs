import React from 'react'
import BannerGeneral from '../paginainfo/BannerGeneral'
import Servicio from './Servicio'
const ServicioTec = () => {
    return (
        <div>
            <BannerGeneral
                imagen={
                    'https://res.cloudinary.com/darps1cta/image/upload/v1687643443/nexo/medico-tecnico-laboratorio-analizando-evolucion-virus-tableta-digital-equipo-cientificos-que-llevan-cabo-desarrollo-vacunas-utilizando-alta-tecnologia-investigar-tratamiento-contra-pandem_hykvlk.jpg'
                }
                titulo={'banner'}
            />
            <Servicio />
        </div>
    )
}

export default ServicioTec

import React from 'react'
import BannerGeneral from '@/components/paginainfo/BannerGeneral'
const ColeccionDesign = ({ datos }) => {
    const banner = datos?.coleccion?.map(coleccion => {
        return {
            imagen_mobil: coleccion.imagen_mobil,
            imagen_desktop: coleccion.imagen_desktop,
            nombre: coleccion.nombre,
        }
    })

    return (
        <div>
            <BannerGeneral
                imagen={banner?.[0]?.imagen_desktop}
                titulo={banner?.[0]?.nombre}
            />
        </div>
    )
}

export default ColeccionDesign

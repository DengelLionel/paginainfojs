import React from 'react'
import BannerGeneral from '../paginainfo/BannerGeneral'
import MasNosotros from './MasNosotros'
const SobreNosotros = () => {
    return (
        <div>
            <BannerGeneral
                imagen={
                    'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1691255296/Empresa_NEW_o5d72x.jpg'
                }
                titulo={'banner'}
            />
            <MasNosotros />
        </div>
    )
}

export default SobreNosotros

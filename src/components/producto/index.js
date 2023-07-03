import { memo } from 'react'
import BannerProducto from './BannerProducto'
import CarruselProducto from './CarruselProducto'
const PaginaProducto = ({ datosProducto }) => {
    const OPTION = {}
    const Imagenes = datosProducto?.map(imagen => imagen.product_imagen)
    return (
        <div>
            <BannerProducto />
            <CarruselProducto slides={Imagenes} options={OPTION} />
        </div>
    )
}

export default memo(PaginaProducto)

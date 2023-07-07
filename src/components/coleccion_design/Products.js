import React from 'react'
import CuadroProductos from '../paginainfo/CuadroProductos'

const Products = ({ datos }) => {
    const renderProducts = () => {
        const products = datos?.coleccion?.[0]?.product

        if (!Array.isArray(products)) return null

        return products.map((product, index) =>
            product.product_imagen?.map((imagen, imgIndex) => (
                <CuadroProductos
                    imagen={imagen.imagen}
                    titulo={product.nombre}
                    link={`/producto/${product.meta_title_link}`}
                    key={`${index}-${imgIndex}`}
                />
            )),
        )
    }

    return (
        <div className="flex-wrap flex items-center justify-center p-[16px] lg:p-[30px] lg:justify-start lg:items-start">
            {renderProducts()}
        </div>
    )
}

export default Products

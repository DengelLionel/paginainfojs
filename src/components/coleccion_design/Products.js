import React from 'react'
import CuadroProductos from '../paginainfo/CuadroProductos'

const Products = ({ datos }) => {
    const renderProducts = () => {
        const products = datos?.coleccion?.[0]?.product

        if (!Array.isArray(products)) return null

        return products.map((product, index) => {
            const firstImage = product.product_imagen?.[0]
            if (!firstImage) return null

            return (
                <CuadroProductos
                    imagen={firstImage.imagen}
                    titulo={product.nombre}
                    nuevo={product.new}
                    oferta={product.oferta}
                    link={`/producto/${product.meta_title_link}`}
                    key={index}
                />
            )
        })
    }

    return (
        <div className="flex-wrap flex items-center justify-center p-[16px] lg:p-[30px] lg:justify-start lg:items-start">
            {renderProducts()}
        </div>
    )
}

export default Products

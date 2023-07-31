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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:h-auto lg:grid-cols-3 gap-4 p-4">
            {renderProducts()}
        </div>
    )
}

export default Products

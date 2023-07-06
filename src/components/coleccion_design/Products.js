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

    return <div>{renderProducts()}</div>
}

export default Products

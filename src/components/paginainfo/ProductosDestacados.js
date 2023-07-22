import React from 'react'
import CuadroProductos from './CuadroProductos'
import useSWR from 'swr'
import axios from '@/lib/axios'
import ProductoDestacadoMobil from './ProductoDestacadoMobil'

const ProductosDestacados = () => {
    const data = useSWR('/api/producto_destacado', () =>
        axios.get('/api/producto_destacado').then(res => res.data),
    )
    const dato = data.data

    return (
        <div className="flex flex-col items-center mb-[100px] pt-[25px] transition-all duration-[500ms]">
            <h2 className="text-blueOne font-bold md:text-[20px] lg:text-[24px]">
                Productos Destacados
            </h2>
            <div className=" hidden lg:flex lg:flex-wrap lg:gap-[16px] lg:justify-center lg:items-center lg:mb-[20px] lg:mt-[20px] lg:w-full">
                {dato?.map((destacados, index) => (
                    <CuadroProductos
                        key={index}
                        nuevo={destacados.new}
                        oferta={destacados.oferta}
                        imagen={destacados.product_imagen[0].imagen}
                        titulo={destacados.nombre}
                        link={`/producto/${destacados.meta_title_link}`}
                    />
                ))}
            </div>
            <ProductoDestacadoMobil datos={dato} />
        </div>
    )
}

export default ProductosDestacados

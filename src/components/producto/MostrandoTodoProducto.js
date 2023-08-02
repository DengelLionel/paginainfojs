import React from 'react'
import CuadroProductosTwo from '../paginainfo/CuadroProductosTwo'
import { useDatosProducto } from '@/hooks/useDatosProducto'
const MostrandoTodoProducto = () => {
    const { datos } = useDatosProducto()

    return (
        <div className="p-[16px] lg:text-lg lg:p-[30px] pt-[100px]">
            <h1 className="text-blueOne font-bold">PRODUCTOS</h1>
            <div className="p-[16px] mb-[120px] flex flex-wrap items-center justify-center gap-[14px] lg:gap-[20px] lg:p-[30px]">
                {datos?.map((producto, index) => (
                    <CuadroProductosTwo
                        imagen={producto.imagenes_producto[0]?.imagen}
                        titulo={producto.nombre}
                        nuevo={producto.nuevo}
                        oferta={producto.oferta}
                        link={`/producto/${producto.meta_title_link}`}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default MostrandoTodoProducto

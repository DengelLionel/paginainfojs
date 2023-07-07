import React from 'react'
import CuadroProductos from '@/components/paginainfo/CuadroProductos'
import { useDatosProducto } from '@/hooks/useDatosProducto'
const MostrandoTodoProducto = () => {
    const { datos } = useDatosProducto()
    return (
        <div className="p-[16px] flex flex-wrap gap-[10px] lg:gap-[20px] lg:p-[30px]">
            {datos?.map((producto, index) => (
                <CuadroProductos
                    imagen={producto.imagenes_producto[0].imagen}
                    titulo={producto.nombre}
                    link={`/producto/${producto.meta_title_link}`}
                    key={index}
                />
            ))}
        </div>
    )
}

export default MostrandoTodoProducto

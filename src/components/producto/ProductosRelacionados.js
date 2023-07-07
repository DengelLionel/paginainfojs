/* import { useState } from 'react'
import useSWR from 'swr'
import axios from '@/lib/axios' */
const ProductosRelacionados = () => {
    /*   let dato;

    if (idproducto !== undefined && idproducto !== null) {
        const { data } = useSWR(
            `/api/producto_destacado/${idproducto}`,
            url => axios.get(url).then(res => res.data)
        );
    
        dato = data;
    }
     */

    return (
        <div>
            <h2 className="font-medium text-blueOne text-lg">
                Productos relacionados
            </h2>
        </div>
    )
}

export default ProductosRelacionados

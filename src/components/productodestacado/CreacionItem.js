import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import { useToSlug } from '@/hooks/useToSlug'
import useSWR from 'swr'
const CreacionItem = () => {
    const [producto, setProducto] = useState(null)
    const [errorserv, setErrorserv] = useState(null)

    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const handleCrearProducto = async () => {
        try {
            await csrf()
            const product_destacado = {
                product_id: producto === null || NaN ? null : producto,
            }
            await axios.post('/api/producto_destacado', product_destacado)
            window.location.reload()
        } catch (error) {
            setErrorserv(error)
        }
    }

    const data = useSWR('/api/producto', () =>
        axios.get('/api/producto').then(res => res.data),
    )
    const dato = data.data

    useEffect(() => {}, [errorserv])

    return (
        <div>
            <div className="flex flex-col h-auto">
                <div className="!z-5 relative flex flex-col rounded-[20px] w-full md:w-[500px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col  !p-6 3xl:p-![18px] bg-white undefined">
                    <div className="relative flex flex-row justify-between">
                        <h4 className="text-xl font-bold text-red-500  mb-3">
                            Creando Producto destacado
                        </h4>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="link"
                            className="text-sm text-gray-500 font-bold">
                           Producto
                        </label>

                        <select
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            onChange={e =>
                                setProducto(Number(e.target.value))
                            }>
                            <option value={'no'}>No hay producto</option>
                            {dato?.[0].map((producto, index) => (
                                <option key={index} value={producto.id}>
                                    {producto.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                   
                    <div className="mb-3">
                        <button
                            onClick={handleCrearProducto}
                            className="p-[10px] bg-blue-500 text-white font-bold">
                            Crear Producto Destacado
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreacionItem

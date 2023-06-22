import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
const CreacionItem = () => {
    const [imagen, setImagen] = useState('')
    const [errorserv, setErrorserv] = useState(null)

    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const handleCrearProducto = async () => {
        try {
            await csrf()
            const clientes_marca = {
                imagen: imagen
            }
            await axios.post('/api/clientes_marcas', clientes_marca)
            window.location.reload()
        } catch (error) {
            setErrorserv(error)
        }
    }

    useEffect(() => {}, [errorserv])

    return (
        <div>
            <div className="flex flex-col h-auto">
                <div className="!z-5 relative flex flex-col rounded-[20px] w-full md:w-[500px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col  !p-6 3xl:p-![18px] bg-white undefined">
                    <div className="relative flex flex-row justify-between">
                        <h4 className="text-xl font-bold text-red-500  mb-3">
                            Creando  Imagen Cliente Marca
                        </h4>
                    </div>
                    
                    <div className="mb-3">
                        <label
                            htmlFor="name"
                            className="text-sm text-gray-500 font-bold">
                            Imagen
                        </label>
                        <input
                            type="text"
                            id="imagen"
                            placeholder="Imagen"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={imagen}
                            onChange={e => setImagen(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            onClick={handleCrearProducto}
                            className="p-[10px] bg-blue-500 text-white font-bold">
                            CREAR CLIENTE MARCA IMAGEN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreacionItem

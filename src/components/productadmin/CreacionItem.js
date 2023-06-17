import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import { useToSlug } from '@/hooks/useToSlug'
import useSWR from 'swr'
const CreacionItem = () => {
    const [coleccions, setColeccions] = useState(null)
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [procedencia, setProcedencia] = useState('')
    const [ficha_tecnica, setFicha_tecnica] = useState('')
    const [nuevo, setNuevo] = useState('true')
    const [oferta, setOferta] = useState('true')
    const [meta_title, setMeta_title] = useState('')
    const [meta_description, setMeta_description] = useState('')
    const [meta_title_link, setMeta_title_link] = useState('')
    const [errorserv, setErrorserv] = useState(null)

    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const handleCrearProducto = async () => {
        try {
            await csrf()
            const product = {
                coleccion_id: coleccions === null || NaN ? null : coleccions,
                nombre: nombre,
                descripcion: descripcion,
                marca: marca,
                modelo: modelo,
                procedencia: procedencia,
                ficha_tecnica: ficha_tecnica,
                new: nuevo === 'true' ? true : false,
                oferta: oferta === 'true' ? true : false,
                meta_title: meta_title,
                meta_description: meta_description,
                meta_title_link: useToSlug(meta_title_link),
            }
            await axios.post('/api/producto', product)
            window.location.reload()
        } catch (error) {
            setErrorserv(error)
        }
    }

    const data = useSWR('/api/coleccion', () =>
        axios.get('/api/coleccion').then(res => res.data),
    )
    const dato = data.data

    useEffect(() => {}, [errorserv, coleccions])

    return (
        <div>
            <div className="flex flex-col h-auto">
                <div className="!z-5 relative flex flex-col rounded-[20px] w-full md:w-[500px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col  !p-6 3xl:p-![18px] bg-white undefined">
                    <div className="relative flex flex-row justify-between">
                        <h4 className="text-xl font-bold text-red-500  mb-3">
                            Creando Producto
                        </h4>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="link"
                            className="text-sm text-gray-500 font-bold">
                            Colección
                        </label>

                        <select
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            onChange={e =>
                                setColeccions(Number(e.target.value))
                            }>
                            <option value={'no'}>No hay colección</option>
                            {dato?.[0].map((coleccion, index) => (
                                <option key={index} value={coleccion.id}>
                                    {coleccion.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="name"
                            className="text-sm text-gray-500 font-bold">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Nombre"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="name"
                            className="text-sm text-gray-500 font-bold">
                            Descripción
                        </label>
                        <textarea
                            id="name"
                            placeholder="Nombre"
                            className="mt-2 flex h-[200px] w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={descripcion}
                            onChange={e => setDescripcion(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="marca"
                            className="text-sm text-gray-500 font-bold">
                            Marca
                        </label>
                        <input
                            type="text"
                            id="marca"
                            placeholder="Marca"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={marca}
                            onChange={e => setMarca(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="modelo"
                            className="text-sm text-gray-500 font-bold">
                            Modelo
                        </label>
                        <input
                            type="text"
                            id="modelo"
                            placeholder="Modelo"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={modelo}
                            onChange={e => setModelo(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="modelo"
                            className="text-sm text-gray-500 font-bold">
                            Procedencia
                        </label>
                        <input
                            type="text"
                            id="procedencia"
                            placeholder="Procedencia"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={procedencia}
                            onChange={e => setProcedencia(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="ficha_tecnica"
                            className="text-sm text-gray-500 font-bold">
                            Ficha tecnica
                        </label>
                        <input
                            type="text"
                            id="ficha_tecnica"
                            placeholder="Ficha tecnica"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={ficha_tecnica}
                            onChange={e => setFicha_tecnica(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="nuevo"
                            className="text-sm text-gray-500 font-bold">
                            Nuevo
                        </label>

                        <select
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={nuevo}
                            onChange={e => setNuevo(e.target.value)}>
                            <option value="true">Nuevo</option>
                            <option value="false">No nuevo</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="oferta"
                            className="text-sm text-gray-500 font-bold">
                            Oferta
                        </label>

                        <select
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={oferta}
                            onChange={e => setOferta(e.target.value)}>
                            <option value="true">Si, oferta</option>
                            <option value="false">No oferta</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="meta_title"
                            className="text-sm text-gray-500 font-bold">
                            Meta title
                        </label>
                        <input
                            type="text"
                            id="meta_title"
                            placeholder="Escribe meta title"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={meta_title}
                            onChange={e => setMeta_title(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="meta_description"
                            className="text-sm text-gray-500 font-bold">
                            Meta description
                        </label>

                        <textarea
                            id="name"
                            placeholder="Meta description"
                            className="mt-2 flex h-[200px] w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={meta_description}
                            onChange={e => setMeta_description(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="meta_title_link"
                            className="text-sm text-gray-500 font-bold">
                            Meta title link
                        </label>
                        <input
                            type="text"
                            id="meta_title_link"
                            placeholder="Escribe meta description"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={meta_title_link}
                            onChange={e => setMeta_title_link(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            onClick={handleCrearProducto}
                            className="p-[10px] bg-blue-500 text-white font-bold">
                            CREAR Producto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreacionItem

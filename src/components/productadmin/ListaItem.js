import React from 'react'
import useSWR from 'swr'
import axios from '@/lib/axios'

import { useContext, useEffect, useState } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import EditarItem from './EditarItem'
const ListaItem = () => {
    const { isOpen, setIsOpen, setIdProductItem } = useContext(
        PaginaContextValue,
    )
    const data = useSWR('/api/producto', () =>
        axios.get('/api/producto').then(res => res.data),
    )
    const dato = data.data

    const [errorserv, setErrorserv] = useState(null)
    const IdProducto = item => {
        setIdProductItem(item)
    }

    const EliminarItem = async item_eliminado => {
        try {
            await axios.delete(`/api/producto/${item_eliminado}`)
            window.location.reload()
        } catch (error) {
            setErrorserv(error)
        }
    }
    useEffect(() => {}, [errorserv])
    return (
        <div className="overflow-x-auto w-[360px] p-[16px] lg:w-full sm:mx-0.5 lg:mx-0.5">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="">
                    <table className="min-w-full">
                        <thead className="bg-gray-200 border-b">
                            <tr>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Colección
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Nombre
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 w-[150px] lg:w-[400px] px-6 py-4 text-left">
                                    Descripción
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Marca
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Modelo
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Procedencia
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Ficha Tecnica
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Nuevo
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Oferta
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Meta title SEO
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Meta description SEO
                                </th>
                                <th
                                    scope="col"
                                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    Meta title link
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dato?.[0].map((item, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.coleccionnombre === null
                                            ? 'No existe colección'
                                            : item.coleccionnombre}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.nombre}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light  px-6 py-4 ">
                                            {item.descripcion!==null&&"Si existe descripción"}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.marca}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.modelo}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.procedencia}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.ficha_tecnica}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.new === 1 ? 'SI' : 'NO'}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.oferta === 1 ? 'SI' : 'NO'}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.meta_title}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                                        <p className="w-[150px] lg:w-[500px] h-auto ">
                                            {' '}
                                            {item.meta_description}
                                        </p>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {item.meta_title_link}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex flex-col justify-center items-center lg:flex-row">
                                        <button
                                            onClick={() => {
                                                setIsOpen(!isOpen)
                                                IdProducto(item.id ?? item.id)
                                            }}
                                            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline w-[100px]">
                                            EDITAR
                                        </button>
                                        <button
                                            onClick={() =>
                                                EliminarItem(item.id)
                                            }
                                            className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                            ELIMINAR
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <EditarItem />
        </div>
    )
}

export default ListaItem

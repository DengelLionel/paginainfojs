import React from 'react'
import useSWR from 'swr'
import axios from '@/lib/axios'
import Link from 'next/link'

const ListaProductos = () => {
    const data = useSWR('/api/submenuprod', () =>
        axios.get('/api/submenuprod').then(res => res.data),
    )
    const dato = data.data

    return (
        <div className="hidden lg:flex">
            <ul className="bg-blueTwo p-[10px]">
                {dato?.map((item, index) => (
                    <li
                        className="bg-blueOne text-blancoTwo  w-[250px] transition-all duration-300 ease-in-out outline-0 border-blueOne hover:text-blueOne hover:bg-blancoOne hover:border-blueOne focus:border-blueOne"
                        key={index}>
                        <Link
                            className="block  p-[10px]"
                            href={`${
                                item.coleccion.length > 0
                                    ? '/coleccion' + item.enlace
                                    : item.enlace
                            }`}>
                            {item.nombre}
                        </Link>
                        <ul className="bg-blueTwo">
                            {item.subsubmenu.map((subItem, subIndex) => (
                                <li
                                    className="bg-blueTwo text-blueOne  w-[250px]  transition-all duration-300 ease-in-out outline-0 border-blueOne hover:text-blueTwo hover:bg-blueTres hover:border-blueOne focus:border-blueOne"
                                    key={subIndex}>
                                    <Link
                                        className="block p-[10px]"
                                        href={`${
                                            subItem.coleccion.length > 0
                                                ? '/coleccion' + subItem.enlace
                                                : subItem.enlace
                                        }`}>
                                        {subItem.nombre}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListaProductos

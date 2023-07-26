import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import useSWR from 'swr'
import { useToSlug } from '@/hooks/useToSlug'
const CreacionItem = () => {
    const [nombre, setNombre] = useState('')
    const [meta_title, setMeta_title] = useState('')
    const [meta_description, setMeta_description] = useState('')

    const [menu_id, setMenu_id] = useState(0)
    const [submenu_id, setSubmenu_id] = useState(0)
    const [subsubmenu_id, setSubsubmenu_id] = useState(0)
    const [errorserv, setErrorserv] = useState(null)
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const data_menus = useSWR('/api/menu', () =>
        axios.get('/api/menu').then(res => res.data),
    )
    const data_submenus = useSWR('/api/submenu', () =>
        axios.get('/api/submenu').then(res => res.data),
    )
    const data_subsubmenus = useSWR('/api/subsubmenu', () =>
        axios.get('/api/subsubmenu').then(res => res.data),
    )
    const dato_menus = data_menus.data
    const dato_submenus = data_submenus.data
    const dato_subsubmenus = data_subsubmenus.data
    const handleCrearColeccion = async () => {
        try {
            await csrf()
            const coleccion = {
                menu_id: menu_id === 'No hay menú' ? null : menu_id,
                submenu_id: submenu_id === 'No hay submenu' ? null : submenu_id,
                subsubmenu_id:
                    subsubmenu_id === 'No hay sub-submenu'
                        ? null
                        : subsubmenu_id,
                nombre: nombre,
                imagen_desktop: 'imagen1',
                imagen_mobil: 'imagen2',
                meta_title: meta_title,
                meta_description: meta_description,
                meta_title_link: useToSlug(nombre),
            }
            await axios.post('/api/coleccion', coleccion)
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
                            Creación de colección
                        </h4>
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
                            Meta Title
                        </label>
                        <input
                            type="text"
                            id="meta_title"
                            placeholder="Meta Title"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={meta_title}
                            onChange={e => setMeta_title(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="name"
                            className="text-sm text-gray-500 font-bold">
                            Meta Description
                        </label>
                        <textarea
                            id="name"
                            placeholder="Meta Description"
                            className="mt-2 flex h-[200px] w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={meta_description}
                            onChange={e => setMeta_description(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="menu_id"
                            className="text-sm text-gray-500 font-bold">
                            Menú
                        </label>

                        <select
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={menu_id}
                            onChange={e => setMenu_id(e.target.value)}>
                            <option value="No hay menú">No hay menú</option>
                            {dato_menus?.[0].map((menu, index) => (
                                <option key={index} value={menu.id}>
                                    {menu.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="submenu_id"
                            className="text-sm text-gray-500 font-bold">
                            Submenú
                        </label>

                        <select
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={submenu_id}
                            onChange={e => setSubmenu_id(e.target.value)}>
                            <option value="No hay submenu">
                                No hay submenu
                            </option>
                            {dato_submenus?.[0].map((submenu, index) => (
                                <option key={index} value={submenu.id}>
                                    {submenu.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="subsubmenu_id"
                            className="text-sm text-gray-500 font-bold">
                            Sub-submenú
                        </label>

                        <select
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={subsubmenu_id}
                            onChange={e => setSubsubmenu_id(e.target.value)}>
                            <option value="No hay sub-submenu">
                                No hay sub-submenu
                            </option>
                            {dato_subsubmenus?.[0].map((subsubmenu, index) => (
                                <option key={index} value={subsubmenu.id}>
                                    {subsubmenu.nombre}
                                </option>
                            ))}
                        </select>
                        <div className="mb-3">
                            <button
                                onClick={handleCrearColeccion}
                                className="p-[10px] bg-blue-500 text-white font-bold">
                                CREAR COLECCIÓN
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreacionItem

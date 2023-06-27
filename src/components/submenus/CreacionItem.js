import React from 'react'
import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
import useSWR from 'swr'
const CreacionItem = () => {
    const [nombre, setNombre] = useState('')
    const [menu, setMenu] = useState(0)
    const [enlace, setEnlace] = useState('')
    const [visible, setVisible] = useState('true')
    const [errorserv, setErrorserv] = useState(null)
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const data = useSWR('/api/menu', () =>
        axios.get('/api/menu').then(res => res.data),
    )
    const dato = data.data
    const handleCrearMenu = async () => {
        try {
            await csrf()
            const submenu = {
                menu_id: menu,
                nombre: nombre,
                enlace: enlace,
                visible: visible === 'true' ? true : false,
            }
            await axios.post('/api/submenu', submenu)
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
                            Creación del sub menu
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
                            htmlFor="link"
                            className="text-sm text-gray-500 font-bold">
                            Menu
                        </label>

                        <select
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={menu}
                            onChange={e => setMenu(e.target.value)}>
                            <option value="ningun menu">Ningun Menu</option>
                            {dato?.[0].map((menu, index) => (
                                <option key={index} value={menu.id}>
                                    {menu.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="link"
                            className="text-sm text-gray-500 font-bold">
                            Link
                        </label>
                        <input
                            type="text"
                            id="link"
                            placeholder="link"
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={enlace}
                            onChange={e => setEnlace(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="link"
                            className="text-sm text-gray-500 font-bold">
                            Visible
                        </label>

                        <select
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            value={visible}
                            onChange={e => setVisible(e.target.value)}>
                            <option value="true">Visible</option>
                            <option value="false">Invisible</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <button
                            onClick={handleCrearMenu}
                            className="p-[10px] bg-blue-500 text-white font-bold">
                            CREAR SUBMENÚ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreacionItem
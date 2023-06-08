import React from 'react'
import axios from '@/lib/axios'
import { useContext, useState, useRef } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'

const EditarItem = () => {
    const modalRef = useRef()
    const [nombre, setNombre] = useState('')
    const [link, setLink] = useState('')
    const [visible, setVisible] = useState('true')
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const { isOpen, setIsOpen, idMenuItem } = useContext(PaginaContextValue)

    const togglePopup = event => {
        if (modalRef.current === event.target) {
            setIsOpen(!isOpen)
        }
    }
    const handleUpdate = async () => {
        try {
            const menu = {
                name: nombre,
                link: link,
                visible: visible === 'true' ? true : false,
            }
            await csrf()
            const response = await axios.put(`/api/menu/${idMenuItem}`, menu)
            window.location.reload()
            setIsOpen(false)
            console.log(response.data)
        } catch (error) {
            console.error('There was an error updating the item!', error)
        }
    }
    return (
        isOpen && (
            <div
                ref={modalRef}
                onClick={togglePopup}
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blackTransparente">
                <div className="bg-white relative z-[60] rounded shadow-lg p-8 m-4 max-w-xs max-h-full text-center md:w-[450px]">
                    <div>
                        <div className="flex flex-col h-auto">
                            <div className=" relative flex flex-col rounded-[20px] w-full  bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col  !p-6 3xl:p-![18px] bg-white undefined">
                                <div className="relative flex flex-row justify-between">
                                    <h4 className="text-xl font-bold text-red-500  mb-3">
                                        Editar item Menú
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
                                        onChange={e =>
                                            setNombre(e.target.value)
                                        }
                                    />
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
                                        value={link}
                                        onChange={e => setLink(e.target.value)}
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
                                        onChange={e =>
                                            setVisible(e.target.value)
                                        }>
                                        <option value="true">Visible</option>
                                        <option value="false">Invisible</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <button
                                        onClick={handleUpdate}
                                        className="p-[10px] bg-blue-500 text-white font-bold">
                                        ACTUALIZAR ITEM MENÚ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Close
                    </button>
                </div>
            </div>
        )
    )
}

export default EditarItem

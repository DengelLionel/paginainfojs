import React from 'react'
import axios from '@/lib/axios'
import { useContext, useState, useRef, useEffect } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
const EditarItem = () => {
    const modalRef = useRef()
    const [imagen, setImagen] = useState('')
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const { isOpen, setIsOpen, idProductItem } = useContext(PaginaContextValue)
    const [errorserv, setErrorserv] = useState(null)

    const togglePopup = event => {
        if (modalRef.current === event.target) {
            setIsOpen(!isOpen)
        }
    }

    const handleUpdate = async () => {
        try {
            const clientes_marca = {
                imagen: imagen,
            }
            await csrf()
            await axios.put(
                `/api/clientes_marcas/${idProductItem}`,
                clientes_marca,
            )
            window.location.reload()
            setIsOpen(false)
        } catch (error) {
            setErrorserv(error)
        }
    }

    useEffect(() => {}, [errorserv])
    return (
        isOpen && (
            <div
                ref={modalRef}
                onClick={togglePopup}
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blackTransparente">
                <div className="bg-white relative z-[60] rounded shadow-lg p-8 m-4 w-full max-h-full text-center md:w-[450px] lg:w-[800px] overflow-auto">
                    <div>
                        <div className="flex flex-col h-auto">
                            <div className=" relative flex flex-col rounded-[20px] w-full  bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col  !p-6 3xl:p-![18px] bg-white undefined">
                                <div className="relative flex flex-row justify-between">
                                    <h4 className="text-xl font-bold text-red-500  mb-3">
                                        Editar Clientes Marca
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
                                        onChange={e =>
                                            setImagen(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <button
                                        onClick={handleUpdate}
                                        className="p-[10px] bg-blue-500 text-white font-bold">
                                        ACTUALIZAR CLIENTE MARCA
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

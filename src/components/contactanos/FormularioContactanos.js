import React from 'react'

const FormularioContactanos = () => {
    return (
        <div className="p-[16px] lg:p-[30px]">
            <form className="w-full w-full md:w-[400px] bg-blueOne p-8 rounded-md lg:rounded-xl shadow-md">
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="name">
                        Nombre Completo
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="telefono">
                        Telefono
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        type="text"
                        id="telefono"
                        name="telefono"
                        placeholder="999999999"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="mensaje">
                        Mensaje
                    </label>
                    <textarea className="w-full h-[150px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                </div>
                <button
                    className="w-full bg-white text-blueOne text-sm font-bold py-2 px-4 rounded-md hover:bg-blueTwo transition duration-300"
                    type="submit">
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default FormularioContactanos

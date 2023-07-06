import React from 'react'

const FormularioPost = () => {
    return (
        <div className="p-[16px] lg:p-[30px]">
            <form className="w-full w-full md:w-[400px] bg-gray-300 p-8 rounded-md lg:rounded-xl shadow-md">
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Nombre de quien reporta el incidente"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="telefono"
                        name="telefono"
                        placeholder="Télefono móvil"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Correo electrónico"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="institucion"
                        name="institucion"
                        placeholder="Institución"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="telefonos"
                        name="telefonos"
                        placeholder="Telefonos"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="equipo"
                        name="equipo"
                        placeholder="Equipo"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="marca"
                        name="marca"
                        placeholder="Marca"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="modelo"
                        name="modelo"
                        placeholder="Modelo"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="serie"
                        name="serie"
                        placeholder="Serie"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Descripción del incidente"
                        className="w-full h-[150px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100  text-sm"
                    />
                </div>
                <button
                    className="w-full bg-white text-gray-500 text-sm font-bold py-2 px-4 rounded-md hover:bg-blueTwo transition duration-300 mb-[20px]"
                    type="submit">
                    Enviar
                </button>
                <p className="text-[12px]">
                    Todos los campos son obligatorios
                    <br />
                    (*) Por favor se explicitó, indicando las circunstancias en
                    las que ocurre el incidente. si hubiera algún mensaje de
                    error involucrado, anótelo.
                </p>
            </form>
        </div>
    )
}

export default FormularioPost

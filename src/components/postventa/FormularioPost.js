import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
const FormularioPost = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [institucion, setInstitucion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [telefonos, setTelefonos] = useState('')
    const [equipo, setEquipo] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [serie, setSerie] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [errorserv, setErrorserv] = useState(null)
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const handleEnviarPost = async event => {
        event.preventDefault()
        try {
            await csrf()
            const postventa = {
                nombre: nombre,
                correo: correo,
                institucion: institucion,
                telefono: telefono,
                telefonos: telefonos,
                equipo: equipo,
                marca: marca,
                modelo: modelo,
                serie: serie,
                descripcion: descripcion,
            }
            await axios.post('/api/enviarpostventa', postventa)
            window.location.reload()
        } catch (error) {
            setErrorserv(error)
        }
    }
    useEffect(() => {}, [errorserv])

    return (
        <div className="p-[16px] lg:p-[30px]">
            <form
                onSubmit={handleEnviarPost}
                className="w-full w-full md:w-[400px] bg-gray-300 p-8 rounded-md lg:rounded-xl shadow-md">
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="Nombre de quien reporta el incidente"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="telefono"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                        placeholder="Télefono móvil"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="email"
                        id="email"
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}
                        placeholder="Correo electrónico"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="institucion"
                        value={institucion}
                        onChange={e => setInstitucion(e.target.value)}
                        placeholder="Institución"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="telefonos"
                        value={telefonos}
                        onChange={e => setTelefonos(e.target.value)}
                        placeholder="Telefonos"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="equipo"
                        value={equipo}
                        onChange={e => setEquipo(e.target.value)}
                        placeholder="Equipo"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="marca"
                        value={marca}
                        onChange={e => setMarca(e.target.value)}
                        placeholder="Marca"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="modelo"
                        value={modelo}
                        onChange={e => setModelo(e.target.value)}
                        placeholder="Modelo"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="serie"
                        value={serie}
                        onChange={e => setSerie(e.target.value)}
                        placeholder="Serie"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
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

import { useState, useEffect } from 'react'
import axios from '@/lib/axios'
const FormularioCotizar = () => {
    const [razonsocial, setRazonsocial] = useState('')
    const [ruc, setRuc] = useState('')
    const [correo, setCorreo] = useState('')
    const [telefono, setTelefono] = useState('')
    const [personacontacto, setPersonacontacto] = useState('')
    const [equiposcotizar, setEquiposcotizar] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [errorserv, setErrorserv] = useState(null)
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const handleEnviarCotizar = async event => {
        event.preventDefault()
        try {
            await csrf()
            const cotizar = {
                razonsocial: razonsocial,
                ruc: ruc,
                correo: correo,
                telefono: telefono,
                personacontacto: personacontacto,
                equiposcotizar: equiposcotizar,
                mensaje: mensaje,
            }
            await axios.post('/api/cotizar', cotizar)
            window.location.reload()
        } catch (error) {
            setErrorserv(error)
        }
    }
    useEffect(() => {}, [errorserv])
    return (
        <div className="p-[16px] lg:p-[30px]">
            <form
                onSubmit={handleEnviarCotizar}
                className="w-full w-full md:w-[400px] bg-gray-300 p-8 rounded-md lg:rounded-xl shadow-md">
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="razonsocial"
                        value={razonsocial}
                        onChange={e => setRazonsocial(e.target.value)}
                        placeholder="Razon social"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="ruc"
                        value={ruc}
                        onChange={e => setRuc(e.target.value)}
                        placeholder="Ruc"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="email"
                        id="correo"
                        value={correo}
                        onChange={e => setCorreo(e.target.value)}
                        placeholder="Correo electrónico"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="telefono"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                        placeholder="Telefono"
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="personacontacto"
                        value={personacontacto}
                        onChange={e => setPersonacontacto(e.target.value)}
                        placeholder="Persona del contacto"
                    />
                </div>

                <div className="mb-4">
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100 text-sm"
                        type="text"
                        id="equipo"
                        value={equiposcotizar}
                        onChange={e => setEquiposcotizar(e.target.value)}
                        placeholder="Equipo a cotizar"
                    />
                </div>

                <div className="mb-4">
                    <textarea
                        value={mensaje}
                        onChange={e => setMensaje(e.target.value)}
                        placeholder="Escriba el mensaje"
                        className="w-full h-[150px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100  text-sm"
                    />
                </div>
                <button
                    className="w-full bg-white text-gray-500 text-sm font-bold py-2 px-4 rounded-md hover:bg-blueTwo transition duration-300 mb-[20px]"
                    type="submit">
                    Enviar
                </button>
                <p className="text-[12px]">Todos los campos son obligatorios</p>
            </form>
        </div>
    )
}

export default FormularioCotizar

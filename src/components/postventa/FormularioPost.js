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
    const [enviando, setEnviando] = useState(false)
    const [enviado, setEnviado] = useState(false)
    const [errorNombre, setErrorNombre] = useState('')
    const [errorCorreo, setErrorCorreo] = useState('')
    const [errorInstitucion, setErrorInstitucion] = useState('')
    const [errorTelefono, setErrorTelefono] = useState('')
    const [errorTelefonos, setErrorTelefonos] = useState('')
    const [errorEquipo, setErrorEquipo] = useState('')
    const [errorMarca, setErrorMarca] = useState('')
    const [errorModelo, setErrorModelo] = useState('')
    const [errorSerie, setErrorSerie] = useState('')
    const [errorDescripcion, setErrorDescripcion] = useState('')
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const handleEnviarPost = async event => {
        event.preventDefault()
        setEnviando(true)

        if (!nombre.trim()) {
            setErrorNombre(
                'Por favor, ingrese el nombre de quien reporta el incidente.',
            )
            setEnviando(false)
            return
        } else setErrorNombre('')

        if (!correo.trim()) {
            setErrorCorreo('Por favor, ingrese un correo electrónico válido.')
            setEnviando(false)
            return
        } else setErrorCorreo('')
        if (!institucion.trim()) {
            setErrorInstitucion('Por favor, ingrese su institución.')
            setEnviando(false)
            return
        } else setErrorInstitucion('')
        if (!telefono.trim()) {
            setErrorTelefono('Por favor, ingrese su telefono.')
            setEnviando(false)
            return
        } else setErrorTelefono('')
        if (!telefonos.trim()) {
            setErrorTelefonos('Por favor, ingrese sus telefonos.')
            setEnviando(false)
            return
        } else setErrorTelefonos('')
        if (!equipo.trim()) {
            setErrorEquipo('Por favor, ingrese su equipo.')
            setEnviando(false)
            return
        } else setErrorEquipo('')
        if (!marca.trim()) {
            setErrorMarca('Por favor, ingrese su marca.')
            setEnviando(false)
            return
        } else setErrorMarca('')
        if (!modelo.trim()) {
            setErrorModelo('Por favor, ingrese su modelo.')
            setEnviando(false)
            return
        } else setErrorModelo('')
        if (!serie.trim()) {
            setErrorSerie('Por favor, ingrese su serie.')
            setEnviando(false)
            return
        } else setErrorSerie('')
        if (!descripcion.trim()) {
            setErrorDescripcion('Por favor, ingrese su descripción.')
            setEnviando(false)
            return
        } else setErrorDescripcion('')
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
            setEnviado(true)
            setNombre('')
            setCorreo('')
            setInstitucion('')
            setTelefono('')
            setTelefonos('')
            setEquipo('')
            setMarca('')
            setModelo('')
            setSerie('')
            setDescripcion('')
        } catch (error) {
            setErrorserv(error)
        } finally {
            setEnviando(false)
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
                    {errorNombre && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorNombre}
                        </p>
                    )}
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
                    {errorTelefono && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorTelefono}
                        </p>
                    )}
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
                    {errorCorreo && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorCorreo}
                        </p>
                    )}
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
                    {errorInstitucion && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorInstitucion}
                        </p>
                    )}
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
                    {errorTelefonos && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorTelefonos}
                        </p>
                    )}
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
                    {errorEquipo && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorEquipo}
                        </p>
                    )}
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
                    {errorMarca && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorMarca}
                        </p>
                    )}
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
                    {errorModelo && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorModelo}
                        </p>
                    )}
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
                    {errorSerie && (
                        <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                            {errorSerie}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <textarea
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                        placeholder="Descripción del incidente"
                        className="w-full h-[150px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-sky-100  text-sm"
                    />
                </div>
                {errorDescripcion && (
                    <p className="w-ful p-[10px] rounded-sm bg-red-500 text-white font-medium mt-[2px] text-xs">
                        {errorDescripcion}
                    </p>
                )}
                <button
                    className="w-full bg-white text-gray-500 text-sm font-bold py-2 px-4 rounded-md hover:bg-blueTwo transition duration-300 mb-[20px]"
                    type="submit">
                    {enviando ? 'Enviando...' : 'Enviar'}
                </button>
                <p className="text-[12px]">
                    Todos los campos son obligatorios
                    <br />
                    (*) Por favor se explicitó, indicando las circunstancias en
                    las que ocurre el incidente. si hubiera algún mensaje de
                    error involucrado, anótelo.
                </p>
            </form>
            {enviado && (
                <p className="text-blueOne font-medium mt-4">
                    ¡Gracias por tu mensaje! Nos pondremos en contacto contigo
                    pronto.
                </p>
            )}
        </div>
    )
}

export default FormularioPost

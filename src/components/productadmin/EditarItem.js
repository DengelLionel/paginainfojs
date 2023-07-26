import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react'
import axios from '@/lib/axios'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
import { useToSlug } from '@/hooks/useToSlug'
import useSWR from 'swr'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})
const EditarItem = () => {
    const modalRef = useRef()
    const [coleccion, setColeccion] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState(0.0)
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [procedencia, setProcedencia] = useState('')
    const [ficha_tecnica, setFicha_tecnica] = useState('')
    const [nuevo, setNuevo] = useState('true')
    const [oferta, setOferta] = useState('true')
    const [meta_title, setMeta_title] = useState('')
    const [meta_description, setMeta_description] = useState('')

    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const { isOpen, setIsOpen, idProductItem, productoEditando } = useContext(
        PaginaContextValue,
    )
    const [errorserv, setErrorserv] = useState(null)

    const data = useSWR('/api/coleccion', () =>
        axios.get('/api/coleccion').then(res => res.data),
    )
    const dato = data.data
    const togglePopup = event => {
        if (modalRef.current === event.target) {
            setIsOpen(!isOpen)
        }
    }

    useEffect(() => {
        if (productoEditando) {
            setColeccion(productoEditando.coleccionnombre || '')
            setNombre(productoEditando.nombre || '')
            setDescripcion(productoEditando.descripcion || '')
            setPrecio(productoEditando.precio || 0.0)
            setMarca(productoEditando.marca || '')
            setModelo(productoEditando.modelo || '')
            setProcedencia(productoEditando.procedencia || '')
            setFicha_tecnica(productoEditando.ficha_tecnica || '')
            setNuevo(productoEditando.new || 'true')
            setOferta(productoEditando.oferta || 'true')
            setMeta_title(productoEditando.meta_title || '')
            setMeta_description(productoEditando.meta_description || '')
        }
    }, [productoEditando])

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],

            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],

            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],

            ['clean'],
        ],
    }
    const handleChange = value => {
        setDescripcion(value)
    }
    const handleUpdate = async () => {
        try {
            const product = {
                coleccion_id: coleccion,
                nombre: nombre,
                descripcion: descripcion,
                precio: parseFloat(precio),
                imagen_desktop: 'imagen1',
                imagen_mobil: 'imagen2',
                marca: marca,
                modelo: modelo,
                procedencia: procedencia,
                ficha_tecnica: ficha_tecnica,
                new: nuevo === 'true' ? true : false,
                oferta: oferta === 'true' ? true : false,
                meta_title: meta_title,
                meta_description: meta_description,
                meta_title_link: useToSlug(nombre),
            }
            await csrf()
            await axios.put(`/api/producto/${idProductItem}`, product)
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
                <div className="bg-white relative z-[60] rounded shadow-lg p-8 m-4 w-full max-h-full text-center md:w-[450px] lg:w-[1000px] overflow-auto">
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
                                        htmlFor="link"
                                        className="text-sm text-gray-500 font-bold">
                                        Colección = {coleccion}
                                    </label>

                                    <select
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={coleccion}
                                        onChange={e =>
                                            setColeccion(e.target.value)
                                        }>
                                        <option value="No hay colección">
                                            No hay colección
                                        </option>
                                        {dato?.[0].map((coleccion, index) => (
                                            <option
                                                key={index}
                                                value={coleccion.id}>
                                                {coleccion.nombre}
                                            </option>
                                        ))}
                                    </select>
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
                                        htmlFor="name"
                                        className="text-sm text-gray-500 font-bold">
                                        Descripción
                                    </label>
                                    <QuillNoSSRWrapper
                                        modules={modules}
                                        theme="snow" // or 'bubble'
                                        value={descripcion}
                                        onChange={handleChange}
                                        id="description"
                                        className="mt-2 flex flex-col h-full w-full  rounded-xl border bg-white/0 p-3 text-sm  border-gray-200"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="marca"
                                        className="text-sm text-gray-500 font-bold">
                                        Precio
                                    </label>
                                    <input
                                        type="text"
                                        id="precio"
                                        placeholder="Precio"
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={precio}
                                        onChange={e =>
                                            setPrecio(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="marca"
                                        className="text-sm text-gray-500 font-bold">
                                        Marca
                                    </label>
                                    <input
                                        type="text"
                                        id="marca"
                                        placeholder="Marca"
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={marca}
                                        onChange={e => setMarca(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="modelo"
                                        className="text-sm text-gray-500 font-bold">
                                        Modelo
                                    </label>
                                    <input
                                        type="text"
                                        id="modelo"
                                        placeholder="Modelo"
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={modelo}
                                        onChange={e =>
                                            setModelo(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="modelo"
                                        className="text-sm text-gray-500 font-bold">
                                        Procedencia
                                    </label>
                                    <input
                                        type="text"
                                        id="procedencia"
                                        placeholder="Procedencia"
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={procedencia}
                                        onChange={e =>
                                            setProcedencia(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="ficha_tecnica"
                                        className="text-sm text-gray-500 font-bold">
                                        Ficha tecnica
                                    </label>
                                    <input
                                        type="text"
                                        id="ficha_tecnica"
                                        placeholder="Ficha tecnica"
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={ficha_tecnica}
                                        onChange={e =>
                                            setFicha_tecnica(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="nuevo"
                                        className="text-sm text-gray-500 font-bold">
                                        Nuevo ={' '}
                                        {parseInt(
                                            productoEditando?.[0]?.[0].new,
                                        ) === 1
                                            ? 'Nuevo'
                                            : 'NO NUEVO'}
                                    </label>

                                    <select
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={nuevo}
                                        onChange={e =>
                                            setNuevo(e.target.value)
                                        }>
                                        <option value="false">
                                            Seleccione
                                        </option>
                                        <option value="true">Nuevo</option>
                                        <option value="false">No nuevo</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="oferta"
                                        className="text-sm text-gray-500 font-bold">
                                        Oferta ={' '}
                                        {parseInt(
                                            productoEditando?.[0]?.[0].oferta,
                                        ) === 1
                                            ? 'OFERTA'
                                            : 'NO OFERTA'}
                                    </label>

                                    <select
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={oferta}
                                        onChange={e =>
                                            setOferta(e.target.value)
                                        }>
                                        <option value="false">
                                            Seleccione
                                        </option>
                                        <option value="true">Si, oferta</option>
                                        <option value="false">No oferta</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="meta_title"
                                        className="text-sm text-gray-500 font-bold">
                                        Meta title
                                    </label>
                                    <input
                                        type="text"
                                        id="meta_title"
                                        placeholder="Escribe meta title"
                                        className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={meta_title}
                                        onChange={e =>
                                            setMeta_title(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="meta_description"
                                        className="text-sm text-gray-500 font-bold">
                                        Meta description
                                    </label>

                                    <textarea
                                        id="name"
                                        placeholder="Meta description"
                                        className="mt-2 flex h-[200px] w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                        value={meta_description}
                                        onChange={e =>
                                            setMeta_description(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="mb-3">
                                    <button
                                        onClick={handleUpdate}
                                        className="p-[10px] bg-blue-500 text-white font-bold">
                                        ACTUALIZAR PRODUCTO
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

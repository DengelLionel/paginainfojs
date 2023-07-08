import { useContext, useEffect } from 'react'
import IconBuscador from '../icons/IconBuscador'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import CuadroProductosTwo from '../paginainfo/CuadroProductosTwo'
import axios from '@/lib/axios'
const TodoSearch = () => {
    const {
        setSearch,
        search,
        setErrorSearch,
        datobuscar,
        setDatobuscar,
    } = useContext(PaginaContextValue)

    useEffect(() => {}, [datobuscar])
    const handleInputChange = event => {
        setDatobuscar(event.target.value)
    }

    const handleSearch = () => {
        // Aquí es donde deberías hacer la petición al servidor.
        // Por ejemplo, puedes hacerlo con Axios de esta manera:
        axios
            .get(`/api/search?query=${datobuscar}`)
            .then(res => setSearch(res.data))
            .catch(err => setErrorSearch(err))
    }
    return (
        <div className="pt-[50px]">
            <h1 className="text-blueOne text-center text-lg font-medium">
                Búsqueda total
            </h1>
            <div className="pt-[50px] pl-[20px] pr-[20px] flex flex-row gap-[20px] items-center justify-center text-gray-600 relative">
                <input
                    className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none lg:w-[500px]"
                    type="search"
                    name="search"
                    value={datobuscar}
                    onChange={handleInputChange}
                    placeholder="Buscar"
                />

                <button
                    onClick={handleSearch}
                    type="button"
                    className="absolute right-[10%] top-[75%] lg:right-[32%] transform -translate-y-1/2 bg-transparent w-[30px] h-[30px]">
                    <IconBuscador fill="#2F6AAD" />
                </button>
            </div>

            <div className="p-[16px] flex flex-wrap lg:p-[30px] lg:mb-[150px]">
                {search !== null && search.length <= 0 && (
                    <span className="text-blueOne">
                        0 resultados de búsqueda para "{datobuscar}"
                    </span>
                )}
                {search !== null &&
                    search?.map((producto, index) => (
                        <CuadroProductosTwo
                            key={index}
                            titulo={producto.nombre}
                            link={`/producto/${producto.meta_title_link}`}
                            imagen={producto.product_imagen[0].imagen}
                        />
                    ))}
            </div>
        </div>
    )
}

export default TodoSearch

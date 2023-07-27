import { useContext, useState } from 'react'
import MenuItems2 from './MenuItems2'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import { useDatosMenu } from '@/hooks/useDatosMenu'
import Image from 'next/legacy/image'
import IconTelefono from '@/components/icons/IconTelefono'
import Link from 'next/link'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import IconBuscador from '@/components/icons/IconBuscador'
import FondoOscurecido from '@/components/paginainfo/FondoOscurecido'
const NavBar2 = () => {
    const { datos } = useDatosMenu()
    const router = useRouter()
    const {
        isOopen,
        setOpenSearch,
        openSearch,
        setSearch,
        setErrorSearch,
        datobuscar,
        setDatobuscar,
    } = useContext(PaginaContextValue)
    const [isHovered, setIsHovered] = useState(false)

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
        setOpenSearch(false)
        router.push('/search')
    }

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <nav
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`bg-white
                    hidden  lg:transition-all lg:duration-[800ms]   lg:flex 
                    lg:justify-between lg:items-center lg:h-[80px] lg:w-full 
                    lg:border-b-[1px] lg:pr-[40px] shadow-nav lg:pl-[40px] xl:pr-[78px] xl:pl-[78px]
                    lg:border-blueOne lg:border-opacity-25`}>
            <div className="flex justify-between items-center">
                <div className="relative w-[266px] h-[60px] ">
                    <Link href={'/'}>
                        <Image
                            layout="fill"
                            quality={100}
                            objectFit="contain"
                            src={'/logo-color-nexomedic.svg'}
                            alt="Nexomedic"
                        />
                    </Link>
                </div>
            </div>

            <div className={`${isOopen ? 'block' : 'hidden'} md:block`}>
                <ul className="md:flex  list-none p-0 m-0 md:gap-[30px]">
                    {datos?.map((menu, index) => {
                        const depthLevel = 0
                        return (
                            <MenuItems2
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                                isHovered={isHovered}
                            />
                        )
                    })}
                </ul>
                {/* BUSCANDO */}
                <FondoOscurecido open={openSearch} />
                {openSearch && (
                    <div className={`absolute right-0 w-full z-[555] bg-white`}>
                        <div
                            className={` w-full h-[150px]  bg-white ${
                                openSearch
                                    ? 'opacity-100 h-[150px] visible'
                                    : 'opacity-0 h-0 invisible'
                            }`}>
                            {openSearch && (
                                <div className="pt-[50px] pl-[20px] pr-[20px] flex flex-row gap-[20px] items-center justify-center text-gray-600 relative">
                                    <input
                                        className="border-2 w-[600px] border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                        type="search"
                                        name="search"
                                        value={datobuscar}
                                        onChange={handleInputChange}
                                        placeholder="Buscar"
                                    />
                                    <button
                                        onClick={handleSearch}
                                        type="button"
                                        className="absolute cursor-pointer top-[75%] md:right-[30%] lg:right-[24%] transform -translate-y-1/2 bg-transparent w-[30px] h-[30px]">
                                        <IconBuscador fill="#2F6AAD" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Link
                href={'tel:+517583872'}
                className={
                    'lg:text-plomo hover:text-blueOne hidden xl:flex xl:flex-row xl:items-center font-notosans text-sm font-medium lg:gap-[8px] lg:transiton-all lg:duration-[800ms]'
                }>
                <IconTelefono fill={`${isHovered ? '#595858' : '#595858'}`} />
                (511) 758-3872
            </Link>
        </nav>
    )
}

export default NavBar2

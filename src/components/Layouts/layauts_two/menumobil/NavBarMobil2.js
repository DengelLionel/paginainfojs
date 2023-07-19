import React, { useContext, useState } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import { useDatosMenu } from '@/hooks/useDatosMenu'
import MenuItems from './MenuItems'
import IconMenuOne from '@/components/icons/IconMenuOne'
import IconBuscador from '@/components/icons/IconBuscador'
import Image from 'next/legacy/image'
import Link from 'next/link'
import IconClose from '@/components/icons/IconClose'
import axios from '@/lib/axios'
import { useRouter } from 'next/router'
const NavBarMobil = () => {
    const { datos } = useDatosMenu()
    const router = useRouter()

    const {
        isOopen,
        setIsOopen,
        setSearch,
        setErrorSearch,
        datobuscar,
        setDatobuscar,
    } = useContext(PaginaContextValue)
    const [openSearch, setOpenSearch] = useState(false)

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
        router.push('/search')
    }

    return (
        <nav
            className={`h-[70px] fixed z-[999] bg-white shadow-md md:h-[70px] pt-[16px] pb-[16px] transition-all duration-[700ms] border-b-[1px] border-blueOne border-opacity-25 w-full lg:hidden`}>
            <div className="flex justify-between items-center mb-[10px]">
                <div className="relative w-[190px] h-[42px] ml-[16px]">
                    <Link href={'/'}>
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src={
                                'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1688609786/NEXOMEDIC/LOGO_DE_COLOR_unovda.png'
                            }
                            alt="Nexomedic"
                        />
                    </Link>
                </div>

                <div className="mr-[16px] flex flex-row gap-[22px] lg:hidden">
                    {openSearch ? (
                        <IconClose
                            color="#595858"
                            open={() => setOpenSearch(!openSearch)}
                        />
                    ) : (
                        <IconBuscador
                            fill="#595858"
                            open={() => setOpenSearch(!openSearch)}
                        />
                    )}
                    {isOopen ? (
                        <IconClose
                            color="#595858"
                            open={() => setIsOopen(!isOopen)}
                        />
                    ) : (
                        <IconMenuOne
                            color="#595858"
                            open={() => setIsOopen(!isOopen)}
                        />
                    )}
                </div>
            </div>

            <div
                className={`${
                    isOopen
                        ? 'block absolute bg-blueOne w-full h-[500px] overflow-y-auto'
                        : 'hidden'
                } lg:block`}>
                <ul className=" list-none pr-[16px] pt-[20px] pb-[20px] pl-[16px] ">
                    {datos?.map((menu, index) => {
                        const depthLevel = 0
                        return (
                            <MenuItems
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                            />
                        )
                    })}
                </ul>
            </div>
            {/* PARA EL BUSCADOR */}
            <div
                className={`w-full ${
                    openSearch && 'fixed h-full  backdrop-blur-sm'
                }`}>
                <div
                    className={` bg-white  ${
                        openSearch ? 'h-[200px] opacity-100' : 'h-0 opacity-0'
                    }`}>
                    <div className="pt-[50px] pl-[20px] pr-[20px] flex flex-row gap-[20px] items-center justify-center text-gray-600 relative">
                        <input
                            className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search"
                            name="search"
                            value={datobuscar}
                            onChange={handleInputChange}
                            placeholder="Buscar"
                        />

                        <button
                            onClick={handleSearch}
                            type="button"
                            className="absolute right-[10%] top-[75%] md:right-[5%] transform -translate-y-1/2 bg-transparent w-[30px] h-[30px]">
                            <IconBuscador fill="#2F6AAD" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBarMobil

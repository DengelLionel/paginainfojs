import React, { useContext, useEffect, useState } from 'react'
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
    const [scrollPosition, setScrollPosition] = useState(0)

    const updateScrollPosition = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop)
    }

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
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', updateScrollPosition)
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', updateScrollPosition)
            }
        }
    }, [])

    const navBackground = scrollPosition > 50 ? 'bg-white' : 'bg-transparent'

    return (
        <nav
            className={`h-[70px] shadow-md md:h-[70px] pt-[16px] pb-[16px] transition-all duration-[700ms] border-b-[1px] border-white border-opacity-25 fixed z-[9999] w-full lg:hidden ${navBackground}`}>
            <div className="flex justify-between items-center mb-[10px]">
                <div className="relative w-[190px] h-[42px] ml-[16px]">
                    <Link onClick={() => setIsOopen(false)} href={'/'}>
                        <Image
                            layout="fill"
                            objectFit="contain"
                            priority={true}
                            src={`${
                                navBackground === 'bg-white'
                                    ? '/logo-color-nexomedic.svg'
                                    : 'https://res.cloudinary.com/dxvqyh8ib/image/upload/v1688609786/NEXOMEDIC/TRANSPARANTE_tzfj6x.png'
                            }`}
                            alt="Nexomedic"
                        />
                    </Link>
                </div>

                <div className="mr-[16px] flex flex-row gap-[22px] lg:hidden">
                    {openSearch ? (
                        <IconClose
                            color={`${
                                navBackground === 'bg-white'
                                    ? '#595858'
                                    : '#fafafa'
                            }`}
                            open={() => setOpenSearch(!openSearch)}
                        />
                    ) : (
                        <IconBuscador
                            fill={`${
                                navBackground === 'bg-white'
                                    ? '#595858'
                                    : '#fafafa'
                            }`}
                            open={() => setOpenSearch(!openSearch)}
                        />
                    )}
                    {isOopen ? (
                        <IconClose
                            color={`${
                                navBackground === 'bg-white'
                                    ? '#595858'
                                    : '#fafafa'
                            }`}
                            open={() => setIsOopen(!isOopen)}
                        />
                    ) : (
                        <IconMenuOne
                            color={`${
                                navBackground === 'bg-white'
                                    ? '#595858'
                                    : '#fafafa'
                            }`}
                            open={() => setIsOopen(!isOopen)}
                        />
                    )}
                </div>
            </div>

            <div
                className={`${
                    isOopen
                        ? 'block bg-blueCuatro w-full h-[100vh] overflow-y-auto'
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
                        openSearch
                            ? 'h-[200px] opacity-100 visible'
                            : 'h-0 opacity-0 invisible'
                    }`}>
                    {openSearch && (
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
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBarMobil

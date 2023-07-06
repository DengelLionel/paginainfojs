import { useContext, useState, useEffect } from 'react'
import MenuItems from './MenuItems'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import { useDatosMenu } from '@/hooks/useDatosMenu'
import Image from 'next/legacy/image'
import IconTelefono from '@/components/icons/IconTelefono'
import Link from 'next/link'

const NavBar = ({ logo }) => {
    const { datos } = useDatosMenu()
    const { isOopen } = useContext(PaginaContextValue)
    const [isHovered, setIsHovered] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const [bgColor, setBgColor] = useState('lg:bg-transparent')
    const [topPosition, setTopPosition] = useState('top-[40px]')

    const updateScrollPosition = () => {
        const position = window.scrollY || document.documentElement.scrollTop
        setScrollPosition(position)
        setBgColor(
            position > 50
                ? 'lg:bg-plomo'
                : isHovered
                ? 'lg:bg-white'
                : 'lg:bg-transparent',
        )
        setTopPosition(position > 50 ? 'top-0' : 'top-[40px]')
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
    }, [isHovered])

    const handleMouseEnter = () => {
        setIsHovered(true)
        setBgColor('lg:bg-white')
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        setBgColor(scrollPosition > 50 ? 'lg:bg-plomo' : 'lg:bg-transparent')
    }

    return (
        <nav
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${bgColor} ${topPosition} 
                    hidden lg:fixed lg:z-[999] lg:transition-all lg:duration-[800ms] lg:shadow lg:px-4 lg:flex 
                    lg:justify-between lg:items-center lg:h-[80px] lg:w-full 
                    lg:border-b-[0.5px] lg:pr-[40px] lg:shadow-xl lg:pl-[40px] xl:pr-[78px] xl:pl-[78px]
                    lg:border-white lg:border-opacity-25`}>
            <div className="flex justify-between items-center">
                <div className="relative w-[266px] h-[60px] ">
                    <Link href={'/'}>
                        <Image
                            layout="fill"
                            quality={100}
                            objectFit="cover"
                            src={logo}
                            alt="Descripción del logo"
                        />
                    </Link>
                </div>
            </div>

            <div className={`${isOopen ? 'block' : 'hidden'} md:block`}>
                <ul className="md:flex  list-none p-0 m-0 md:gap-[30px]">
                    {datos?.map((menu, index) => {
                        const depthLevel = 0
                        return (
                            <MenuItems
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                                isHovered={isHovered}
                            />
                        )
                    })}
                </ul>
            </div>
            <Link
                href={'tel:+517583872'}
                className={`${
                    isHovered
                        ? 'lg:text-black hover:text-blueOne'
                        : 'lg:text-white'
                }  hidden xl:flex xl:flex-row xl:items-center font-notosans font-medium lg:gap-[8px] lg:transiton-all lg:duration-[800ms]`}>
                <IconTelefono fill={`${isHovered ? '#222222' : '#EEEFF3'}`} />
                (511) 758-3872
            </Link>
        </nav>
    )
}

export default NavBar

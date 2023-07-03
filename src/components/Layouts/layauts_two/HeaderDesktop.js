import React, { useRef, useEffect, memo, useContext } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'

const HeaderDesktop = ({ LinksNavDesktop, logo }) => {
    const toggleContainer = useRef(null)
    const {
        openMenuDesktop,
        setOpenMenuDesktop,
        openSubsubNav,
        setOpenSubsubNav,
    } = useContext(PaginaContextValue)
    useEffect(() => {
        const onClickOutsideHandler = event => {
            if (
                openMenuDesktop &&
                !toggleContainer.current.contains(event.target)
            ) {
                setOpenMenuDesktop(false)
            }
            if (
                openSubsubNav &&
                !toggleContainer.current.contains(event.target)
            ) {
                setOpenSubsubNav(false)
            }
        }

        window.addEventListener('click', onClickOutsideHandler)
        return () => {
            window.removeEventListener('click', onClickOutsideHandler)
        }
    }, [openMenuDesktop, openSubsubNav])

    return (
        <div ref={toggleContainer}>
            <div
                className={`bg-black z-[40] lg:w-full lg:h-[80px] lg:flex lg:justify-center lg:items-center`}>
                <div className={`flex flex-row p-[20px]`}>
                    <section className="cursor-pointer w-full mr-4 lg:flex lg:justify-between">
                        {logo}
                        <article>{LinksNavDesktop}</article>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default memo(HeaderDesktop)

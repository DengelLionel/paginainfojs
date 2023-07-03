import React, { useRef, useEffect, useContext } from 'react'
import IconMenuOne from '../../icons/IconMenuOne'
import { PaginaContextValue } from '@/context/contextpaginaifno'
import NavMobil from './NavMobil'
const HeaderMobil = ({ logo }) => {
    const toggleContainer = useRef(null)
    const { openMenu, setOpenMenu } = useContext(PaginaContextValue)
    useEffect(() => {
        const onClickOutsideHandler = event => {
            if (openMenu && !toggleContainer.current.contains(event.target)) {
                setOpenMenu(false)
            }
        }

        window.addEventListener('click', onClickOutsideHandler)
        return () => {
            window.removeEventListener('click', onClickOutsideHandler)
        }
    }, [openMenu, setOpenMenu])

    return (
        <div ref={toggleContainer}>
            <div
                className={`bg-black md:hidden fixed top-0  z-[40] w-full h-[64px] items-center pt-[16px] pb-[16px]`}>
                <section className="flex justify-between ">
                    <section>{logo}</section>
                    <div className="mr-[16px]">
                        {' '}
                        <IconMenuOne open={() => setOpenMenu(!openMenu)} />
                    </div>
                </section>
                <section className="flex justify-end space-y-4">
                    <NavMobil />
                </section>
            </div>
        </div>
    )
}

export default HeaderMobil

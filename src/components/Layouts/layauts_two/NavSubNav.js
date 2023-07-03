import React, { memo, useContext } from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno'

const NavSubNav = ({ children }) => {
    const { openSubsubNav } = useContext(PaginaContextValue)

    return (
        <ul
            className={`bg-red-800 w-[220px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl z-[40] transition-all duration-700 delay-75 absolute left-[220px] top-0 ${
                openSubsubNav === true
                    ? 'skew-y-0 opacity-100  visible'
                    : 'skew-y-3 invisible translate-y-1.5 opacity-0 overflow-hidden'
            } hidden lg:block`}>
            <div className="flex flex-col cursor-pointer gap-[8px] justify-center items-start tracking-[0.015em] font-semibold p-[20px]">
                {children}
            </div>
        </ul>
    )
}

export default memo(NavSubNav)

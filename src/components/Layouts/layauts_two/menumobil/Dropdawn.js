import React from 'react'
import MenuItems from './MenuItems'
import { useMediaQuery } from 'react-responsive'
const Dropdawn = ({ submenus, dropdawn, depthLevel }) => {
    let newDepthLevel = depthLevel + 1

    const isMobile = useMediaQuery({ query: '(max-width: 960px)' })

    const positionClasses = isMobile
        ? 'absolute w-full'
        : 'absolute left-full -mt-[50px] w-full'

    return (
        <ul
            className={`list-none bg-white shadow-md rounded-md p-2 ${positionClasses} ${
                dropdawn ? 'block' : 'hidden'
            }`}>
            {submenus?.map((submenu, index) => (
                <MenuItems
                    items={submenu}
                    key={index}
                    depthLevel={newDepthLevel}
                />
            ))}
        </ul>
    )
}

export default Dropdawn

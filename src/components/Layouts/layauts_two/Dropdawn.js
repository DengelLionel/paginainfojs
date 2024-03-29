import React from 'react'
import MenuItems from './MenuItems'
const Dropdawn = ({ submenus, dropdawn, depthLevel }) => {
    depthLevel = depthLevel + 1

    return (
        <div
            className={`${
                dropdawn ? 'block' : 'hidden'
            } absolute right-0 list-none shadow-md  rounded-md z-[9999] p-2  ${
                depthLevel > 1
                    ? 'absolute left-full -mt-[50px] w-[150px]  z-[9999] md:w-[190px] text-blueOne'
                    : ''
            }`}>
            {submenus?.map((submenu, index) => {
                return (
                    <ul
                        className={
                            'bg-white text-blueOne font-notosans text-sm font-medium md:w-[190px]'
                        }
                        key={index}>
                        <MenuItems items={submenu} depthLevel={depthLevel} />
                    </ul>
                )
            })}
        </div>
    )
}

export default Dropdawn

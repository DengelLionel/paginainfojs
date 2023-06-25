import React from 'react'
import MenuItems from './MenuItems'
const Dropdawn = ({submenus,dropdawn,depthLevel}) => {
  depthLevel=depthLevel+1

  return (
      <div className={`${dropdawn ? 'block' : 'hidden'
      } absolute right-0 list-none shadow-md rounded-md p-2 ${
          depthLevel > 1 ? 'absolute left-full -mt-[50px] w-[150px]' : '' 
      }`}>
          {submenus?.map((submenu, index) => {
              const hasSubmenus = submenu.submenu && submenu.submenu.length > 0;
              return (
                  <ul className={"bg-blue-800" } key={index}>
                      <MenuItems items={submenu} depthLevel={depthLevel} />
                  </ul>
              )
          })}
      </div>
  )
}

export default Dropdawn
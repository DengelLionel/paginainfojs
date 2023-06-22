import React from 'react'
import MenuItems from './MenuItems'
const Dropdawn = ({submenus,dropdawn,depthLevel}) => {
    depthLevel=depthLevel+1
  console.log("sub",submenus)
  return (
    <ul className={`absolute right-0 list-none bg-white shadow-md rounded-md p-2 ${
        depthLevel > 1 ? 'absolute left-full -mt-[50px] w-full' : ''
      } ${dropdawn ? 'block' : 'hidden'
    }`}>
  {submenus?.map((submenu, index) => (
    <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
  ))}
</ul>
  )
}

export default Dropdawn
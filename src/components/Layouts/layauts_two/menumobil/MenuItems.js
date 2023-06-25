import {  useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive'

const MenuItems = ({ items, depthLevel}) => {
    const [isOpen, setIsOpen]=useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 960px)' })
  const handleToggle = () => setIsOpen(!isOpen)
 

  return (
    <li className="relative font-normal text-base">
    {items.submenu && items.submenu.length > 0 ? (
      <>
        <button
          className='block text-left  w-full text-black hover:bg-gray-200'
          type="button"
          aria-haspopup="menu"
        
          onClick={handleToggle}
        >
          {items.nombre}
        </button>
        {isOpen && items.submenu.map((submenuItem, index) => (
          <div className='pl-4' key={index}>
            <MenuItems items={submenuItem} depthLevel={depthLevel + 1} />
          </div>
        ))}
      </>
    ) : (
      <Link  href={items.enlace}>
       
          {' '.repeat(depthLevel)} {items.nombre}
        
      </Link>
    )}
  </li>
  )
}

export default MenuItems;
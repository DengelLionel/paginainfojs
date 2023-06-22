import { useContext } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive'
import { PaginaContextValue } from '@/context/contextpaginaifno';
const MenuItems = ({ items, depthLevel}) => {
    const {isOopen, setIsOopen}=useContext(PaginaContextValue)
  const isMobile = useMediaQuery({ query: '(max-width: 960px)' });
  const handleToggle = () => {
    setIsOopen(!isOopen);
  };

  return (
    <li className="relative font-normal text-base">
    {items.submenu && items.submenu.length > 0 ? (
      <>
        <button
          className='block text-left  w-full text-black hover:bg-gray-200'
          type="button"
          aria-haspopup="menu"
          aria-expanded={isOopen ? "true" : "false"}
          onClick={handleToggle}
        >
          {items.nombre}
        </button>
        {isOopen && items.submenu.map((submenuItem, index) => (
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
import {useState,useEffect,useRef} from 'react'
import Dropdawn from './Dropdawn'
import Link from 'next/link'
const MenuItems = ({items,depthLevel}) => {
  const [dropdawn,setDropdawn]=useState(false)
  let ref=useRef()
  useEffect(() => {
    const handler = (event) => {
      if (dropdawn && ref.current && !ref.current.contains(event.target)) {
        setDropdawn(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdawn]);
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdawn(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdawn(false);
  };

  return (
    <li
    className="relative font-normal text-base"
    ref={ref}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {items.submenu ? (
      <>
        <button
        className='block text-left px-2 py-1 w-full text-black hover:bg-gray-200'
          type="button"
          aria-haspopup="menu"
          aria-expanded={dropdawn ? "true" : "false"}
          onClick={() => setDropdawn((prev) => !prev)}
        >
          {items.nombre}{" "}
          {depthLevel > 0 ? <span>&raquo;</span> : <span className="" />}
        </button>
        <Dropdawn
          depthLevel={depthLevel}
          submenus={items.submenu}
          dropdawn={dropdawn}
        />
      </>
    ) : (
      <Link className='block text-left px-2 py-1 w-full text-black hover:bg-gray-200' href={items.enlace}>{items.nombre}</Link>
    )}
  </li>
  )
}

export default MenuItems
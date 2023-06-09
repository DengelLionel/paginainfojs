import { useState } from 'react'
import IconSub from '@/components/icons/IconSub'

const MenuItems = ({ items, depthLevel }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)

    const handleLinkClick = e => {
        e.preventDefault()
        const href =
            items.coleccion.length > 0
                ? '/coleccion' + items.enlace
                : items.enlace
        window.location.href = href
    }

    return (
        <li className="relative font-normal text-base p-[10px] overflow-y-auto">
            {items.submenu && items.submenu.length > 0 ? (
                <>
                    <button
                        className="flex flex-row items-center justify-between text-left font-notosans font-medium w-full text-blueOne hover:bg-blueOne hover:text-blancoOne"
                        type="button"
                        aria-haspopup="menu"
                        onClick={handleToggle}>
                        {items.nombre}
                        <IconSub
                            clase={`${
                                isOpen ? 'rotate-90' : 'rotate-0'
                            } transition-all duration-[500ms]`}
                        />
                    </button>
                    {isOpen &&
                        items.submenu.map((submenuItem, index) => (
                            <div className="pl-4 overflow-y-auto" key={index}>
                                <MenuItems
                                    items={submenuItem}
                                    depthLevel={depthLevel + 1}
                                />
                            </div>
                        ))}
                </>
            ) : (
                <a
                    className="font-notosans font-medium text-blueOne"
                    href={`${
                        items.coleccion.length > 0
                            ? '/coleccion' + items.enlace
                            : items.enlace
                    }`}
                    onClick={handleLinkClick}>
                    {' '.repeat(depthLevel)} {items.nombre}
                </a>
            )}
        </li>
    )
}

export default MenuItems

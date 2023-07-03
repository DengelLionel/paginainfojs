import { useState } from 'react'
import Link from 'next/link'
import IconSub from '@/components/icons/IconSub'

const MenuItems = ({ items, depthLevel }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => setIsOpen(!isOpen)

    return (
        <li className="relative font-normal text-base p-[10px]">
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
                            <div className="pl-4" key={index}>
                                <MenuItems
                                    items={submenuItem}
                                    depthLevel={depthLevel + 1}
                                />
                            </div>
                        ))}
                </>
            ) : (
                <Link
                    className="font-notosans font-medium text-blueOne"
                    href={items.enlace}>
                    {' '.repeat(depthLevel)} {items.nombre}
                </Link>
            )}
        </li>
    )
}

export default MenuItems

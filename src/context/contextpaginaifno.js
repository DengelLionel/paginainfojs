import React from 'react'
import { createContext, useState } from 'react'
export const PaginaContextValue = createContext()
const Contextpaginaifno = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOopen, setIsOopen] = useState(false)
    const [idMenuItem, setIdMenuItem] = useState(0)
    const [idSubmenuItem, setIdSubmenuItem] = useState(0)
    const [idSubsubmenuItem, setIdSubsubmenuItem] = useState(0)
    const [idProductItem, setIdProductItem] = useState(0)
    const [idColeccionItem, setIdColeccionItem] = useState(0)
    const [idItem, setIdItem] = useState(0)
    const [openMenuDesktop, setOpenMenuDesktop] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [openSubNav, setOpenSubNav] = useState(false)
    const [openSubsubNav, setOpenSubsubNav] = useState(false)
    const [capturarMenu, setCapturarMenu] = useState(0)
    const [capturarSubMenu, setCapturarSubMenu] = useState(0)
    const [dropdawn, setDropdawn] = useState(false)
    const data = {
        isOpen,
        setIsOpen,
        idMenuItem,
        idSubmenuItem,
        setIdSubmenuItem,
        idSubsubmenuItem,
        setIdSubsubmenuItem,
        setIdMenuItem,
        idProductItem,
        setIdProductItem,
        idColeccionItem,
        setIdColeccionItem,
        idItem,
        setIdItem,
        openMenuDesktop,
        setOpenMenuDesktop,
        openMenu,
        setOpenMenu,
        openSubNav,
        setOpenSubNav,
        capturarMenu,
        setCapturarMenu,
        openSubsubNav,
        setOpenSubsubNav,
        capturarSubMenu,
        setCapturarSubMenu,
        isOopen,
        setIsOopen,
        dropdawn,
        setDropdawn,
    }
    return (
        <PaginaContextValue.Provider value={data}>
            {children}
        </PaginaContextValue.Provider>
    )
}

export default Contextpaginaifno

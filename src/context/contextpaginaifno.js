import React from 'react'
import { createContext, useState } from 'react'
export const PaginaContextValue = createContext()
const Contextpaginaifno = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [idMenuItem, setIdMenuItem] = useState(0)
    const [idSubmenuItem, setIdSubmenuItem] = useState(0)
    const [idSubsubmenuItem, setIdSubsubmenuItem] = useState(0)
    const [idProductItem, setIdProductItem] = useState(0)
    const [idColeccionItem, setIdColeccionItem] = useState(0)

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
    }
    return (
        <PaginaContextValue.Provider value={data}>
            {children}
        </PaginaContextValue.Provider>
    )
}

export default Contextpaginaifno

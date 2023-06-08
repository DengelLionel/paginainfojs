import React from 'react'
import { createContext, useState } from 'react'
export const PaginaContextValue = createContext()
const Contextpaginaifno = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [idMenuItem, setIdMenuItem] = useState(0)
    const data = {
        isOpen,
        setIsOpen,
        idMenuItem,
        setIdMenuItem,
    }
    return (
        <PaginaContextValue.Provider value={data}>
            {children}
        </PaginaContextValue.Provider>
    )
}

export default Contextpaginaifno

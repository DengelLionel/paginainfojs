import React from 'react'
import { memo } from 'react'
import NavBar2 from './NavBar2'
import NavBarMobil2 from './menumobil/NavBarMobil2'

const HeaderPrincipal2 = ({ logo }) => {
    return (
        <div>
            {/* movile and tablet */}
            <div className="lg:hidden">
                <NavBarMobil2 logo={logo} />
            </div>
            {/* desktop */}
            <div className="hidden md:block">
                <NavBar2 logo={logo} />
            </div>
        </div>
    )
}

export default memo(HeaderPrincipal2)

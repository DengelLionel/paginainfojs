import { useContext } from 'react';
import MenuItems from "./MenuItems";
import { PaginaContextValue } from '@/context/contextpaginaifno';
import { useDatosMenu } from "@/hooks/useDatosMenu";

const NavBar = ({ logo }) => {
  const { datos } = useDatosMenu();

    const {isOopen, setIsOopen}=useContext(PaginaContextValue)
  return (
    <nav className="bg-white shadow px-4 md:flex md:justify-between md:items-center"> 
      <div className="flex justify-between items-center">
        <div> 
          <img src={logo} alt="Descripción del logo" /> 
        </div>

        <div className="md:hidden">
          <button type="button" onClick={() => setIsOopen(!isOopen)}>
            <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
              <path fillRule="evenodd" d="M4 5a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h10a1 1 0 100-2H5z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isOopen ? 'block' : 'hidden'} md:block`}>
        <ul className="md:flex list-none p-0 m-0">
          {
            datos?.map((menu, index) => {
              const depthLevel = 0
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}
export default NavBar
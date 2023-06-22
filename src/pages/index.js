import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import NavBar from '@/components/Layouts/layauts_two/NavBar'
import {useContext,useEffect,useRef} from 'react'
import { PaginaContextValue } from '@/context/contextpaginaifno';
export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })
    const {isOopen, setIsOopen}=useContext(PaginaContextValue)
    const toggleContainer = useRef(null);
    const handleClickOutside = e => {
        if (toggleContainer.current.contains(e.target)) {
          // si se hace clic dentro del menú, no hacemos nada
          return;
        }
        // si se hace clic fuera del menú, se cierra
        setIsOopen(false);
      };
        useEffect(() => {
            if (isOopen) {
              document.addEventListener("mouseup", handleClickOutside);
            } else {
              document.removeEventListener("mousedown", handleClickOutside);
            }
        
            return () => {
              document.removeEventListener("mousedown", handleClickOutside);
            };
          }, [isOopen]);
    return (
        <>
            <Head>
                <title>Equipos medicos</title>
            </Head>
           
            <header ref={toggleContainer}>
             <HeaderPrincipal logo={<h1>Lgo</h1>}/>
            </header>
            <main>
           
            </main>
           
          
          
        </>
    )
}

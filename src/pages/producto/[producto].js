import Head from 'next/head'
import HeaderPrincipal2 from '@/components/Layouts/layauts_two/HeaderPrincipal2'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import PaginaProducto from '@/components/producto'
import { useRouter } from 'next/router'
import Whatsapp from '@/components/paginainfo/Whatsapp'
import { useDatosFiltrados } from '@/hooks/useDatosProducto'
const Producto = () => {
    const router = useRouter()
    const { producto } = router.query
    const { filteredDatos } = useDatosFiltrados(producto && producto)
    return (
        <>
            <Head>
                <title>
                    {filteredDatos && filteredDatos.length > 0
                        ? filteredDatos[0].meta_title
                        : 'Cargando...'}
                </title>
                <meta
                    name="description"
                    content={
                        filteredDatos && filteredDatos.length > 0
                            ? filteredDatos[0].meta_description
                            : undefined
                    }
                />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href={`https://www.nexomedic.com.pe/producto/${
                        producto && producto
                    }`}
                />
            </Head>
            <Anuncio />
            <HeaderPrincipal2 />
            <PaginaProducto datosProducto={filteredDatos && filteredDatos} />

            <main className="bg-white">
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}
export default Producto

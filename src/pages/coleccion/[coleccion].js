import { memo, useState, useEffect } from 'react'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Anuncio from '@/components/paginainfo/Anuncio'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import ColeccionDesign from '@/components/coleccion_design'
import useSWR from 'swr'
import axios from '@/lib/axios'
import ListaProductos from '@/components/producto/ListaProductos'
import Products from '@/components/coleccion_design/Products'
import Whatsapp from '@/components/paginainfo/Whatsapp'
const Coleccion = () => {
    const buscarEnDatos = (array, coleccion) => {
        let resultado = null
        for (const item of array) {
            if (item.enlace === coleccion) {
                resultado = item
                break
            }
            if (item.submenu && item.submenu.length > 0) {
                resultado = buscarEnDatos(item.submenu, coleccion)
                if (resultado) break
            }
        }
        return resultado
    }
    const router = useRouter()
    const { coleccion } = router.query

    const [datos, setDatos] = useState(null)

    const data = useSWR('/api/todomenulevel', () =>
        axios.get('/api/todomenulevel').then(res => res.data),
    )
    const dato = data.data

    useEffect(() => {
        if (dato) {
            setDatos(buscarEnDatos(dato, '/' + coleccion))
        }
    }, [coleccion, dato])

    return (
        <>
            <Head>
                <title>{datos?.coleccion[0].meta_title}</title>
                <meta
                    name="description"
                    content={
                        datos?.length > 0 &&
                        datos?.coleccion[0].meta_description
                    }
                />
                <meta name="robots" content="index,follow" />
                <link
                    rel="canonical"
                    href={`https://www.nexomedic.com.pe/coleccion/${coleccion}`}
                />
            </Head>
            <Anuncio />
            <HeaderPrincipal />

            <main className="bg-white">
                <ColeccionDesign datos={datos} />
                <div className="lg:flex mb-[120px] lg:flex-row lg:gap-[20px] lg:pl-[20px]">
                    <div className="hidden lg:flex lg:flex-col">
                        <h1 className="text-blueOne font-bold p-[20px]">
                            {datos?.coleccion[0].nombre}
                        </h1>
                        <ListaProductos />
                    </div>
                    <h1 className=" block text-blueOne font-bold p-[20px] lg:hidden">
                        {datos?.coleccion[0].nombre}
                    </h1>
                    <Products datos={datos} />
                </div>
                <Whatsapp />
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(Coleccion)

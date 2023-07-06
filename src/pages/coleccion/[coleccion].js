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
            </Head>
            <Anuncio />
            <HeaderPrincipal
                logo={
                    'https://res.cloudinary.com/darps1cta/image/upload/v1687493114/nexo/Nexo-Medic_Logo_dklapo.png'
                }
            />

            <main className="bg-white">
                <ColeccionDesign datos={datos} />
                <div className="lg:flex lg:flex-row lg:gap-[20px]">
                    <ListaProductos />
                    <Products datos={datos} />
                </div>
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}

export default memo(Coleccion)

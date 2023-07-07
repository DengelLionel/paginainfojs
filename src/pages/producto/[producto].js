import Head from 'next/head'
import HeaderPrincipal from '@/components/Layouts/layauts_two/HeaderPrincipal'
import Anuncio from '@/components/paginainfo/Anuncio'
import ConocePromocines from '@/components/paginainfo/ConocePromocines'
import Marcas from '@/components/paginainfo/Marcas'
import Footer from '@/components/paginainfo/Footer'
import PaginaProducto from '@/components/producto'
import { useRouter } from 'next/router'
import { useState, useEffect, memo } from 'react'
import useSWR from 'swr'
import axios from '@/lib/axios'
const Producto = () => {
    const [datos, setDatos] = useState(null)
    const data = useSWR('/api/productos_todo', () =>
        axios.get('/api/productos_todo').then(res => res.data),
    )
    const dato = data.data
    const router = useRouter()
    const { producto } = router.query
    useEffect(() => {
        if (dato) {
            const newDatos = dato.filter(
                destacado => producto === destacado.meta_title_link,
            )

            // Solo llama a setDatos si newDatos es diferente a datos
            if (JSON.stringify(newDatos) !== JSON.stringify(datos)) {
                setDatos(newDatos)
            }
        }
    }, [dato, producto])

    return (
        <>
            <Head>
                <title>
                    {datos?.length > 0 ? datos?.[0]?.meta_title : 'Cargando...'}
                </title>
            </Head>
            <Anuncio />
            <HeaderPrincipal />
            <PaginaProducto datosProducto={datos} />

            <main className="bg-white">
                <ConocePromocines />
                <Marcas />
                <Footer />
            </main>
        </>
    )
}
export default memo(Producto)

import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CreacionItem from '@/components/productadmin/CreacionItem'
import ListaItem from '@/components/productadmin/ListaItem'
import Link from 'next/link'
const ItemProduct = () => {
    return (
        <AppLayout
            header={
                <div>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight" />
                </div>
            }>
            <Head>
                <title>Item Product</title>
            </Head>

            <div className="py-12">
                <div className="flex justify-center items-center flex-col sm:px-6  lg:justify-start lg:px-8">
                    <Link
                        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                        href="/colecciones">
                        {' '}
                        Crear colección
                    </Link>
                    <Link
                        className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                        href="/crear_destacados">
                        {' '}
                        Crear Productos Destacados
                    </Link>
                    <CreacionItem />
                    <ListaItem />
                </div>
            </div>
        </AppLayout>
    )
}

export default ItemProduct

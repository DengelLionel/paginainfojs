import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import CreacionItem from '@/components/cliente_marca/CreacionItem'
import ListaItem from '@/components/cliente_marca/ListaItem'
const Clientes = () => {
    return (
        <AppLayout
            header={
                <div>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight" />
                </div>
            }>
            <Head>
                <title>Clientes</title>
            </Head>

            <div className="py-12">
                <div className="flex justify-center items-center flex-col sm:px-6  lg:justify-start lg:px-8">
                    <CreacionItem />
                    <ListaItem />
                </div>
            </div>
        </AppLayout>
    )
}

export default Clientes

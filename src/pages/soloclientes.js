import CrearClientes from '@/components/cliente_marca/CrearClientes'
import ListaClientes from '@/components/cliente_marca/ListaClientes'
import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
const soloclientes = () => {
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
                    <CrearClientes />
                    <ListaClientes />
                </div>
            </div>
        </AppLayout>
    )
}

export default soloclientes

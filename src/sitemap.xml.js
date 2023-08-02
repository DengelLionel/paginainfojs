import Axios from 'axios'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export default async res => {
    // Listado de tus páginas
    const sitemap = [
        {
            url: `${URL}`,
            lastModified: new Date(),
        },
        {
            url: `${URL}/empresa`,
            lastModified: new Date(),
        },
        {
            url: `${URL}/productos`,
            lastModified: new Date(),
        },
        {
            url: `${URL}/post-venta`,
            lastModified: new Date(),
        },
        {
            url: `${URL}/servicio-tecnico`,
            lastModified: new Date(),
        },
        {
            url: `${URL}/clientes`,
            lastModified: new Date(),
        },
        {
            url: `${URL}/contactanos`,
            lastModified: new Date(),
        },
    ]
    const data = await Axios.get(`/api/productos_todo`, {
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
        withCredentials: true,
    })

    const datos = await data.data

    datos.forEach(producto => {
        if (producto.meta_title_link) {
            sitemap.push({
                url: `${URL}/producto/${producto.meta_title_link}`,
                lastModified: new Date(),
            })
        }
    })

    const sitemapStream = new SitemapStream({
        hostname: 'https://nexomedic.com.pe',
    })
    res.writeHead(200, {
        'Content-Type': 'application/xml',
    })
    const xmlString = await streamToPromise(
        Readable.from(sitemap).pipe(sitemapStream),
    ).then(data => data.toString())
    res.end(xmlString)
}

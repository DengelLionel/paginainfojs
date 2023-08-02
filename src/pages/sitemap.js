import Axios from 'axios'
const URL = 'https://nexomedic.com.pe'

export default async function sitemap() {
    const siteMap = [
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
            siteMap.push({
                url: `${URL}/producto/${producto.meta_title_link}`,
                lastModified: new Date(),
            })
        }
    })
    return siteMap
}

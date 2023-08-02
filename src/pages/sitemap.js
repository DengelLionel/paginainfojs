import { datos } from '@/lib/datosproducto'
const URL = 'https://nexomedic.com.pe'

export default async function sitemap() {
    // Static pages
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

    // Generate
    datos.forEach(post => {
        siteMap.push({
            url: `${URL}/producto/${post.meta_title_link}`,
            lastModified: new Date(),
        })
    })

    return siteMap
}

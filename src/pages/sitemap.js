import { getServerSideSitemap } from 'next-sitemap'

const URL = 'https://nexomedic.com.pe'

export const getServerSideProps = async ({ res }) => {
    const siteMap = [
        {
            url: URL,
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

    try {
        const response = await fetch(`${URL}/api/productos_todo`)
        const json = await response.json()
        const dato = json.data
        const datos = dato.data
        datos.forEach(post => {
            siteMap.push({
                url: `${URL}/producto/${post.meta_title_link}`,
                lastModified: new Date(),
            })
        })

        return getServerSideSitemap(res, siteMap)
    } catch (error) {
        return getServerSideSitemap(res, siteMap)
    }
}

const Sitemap = () => null
export default Sitemap

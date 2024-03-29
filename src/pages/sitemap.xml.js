import Axios from 'axios'

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
              <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url>
                  <loc>https://nexomedic.com.pe</loc>
                </url>
                <url>
                <loc>https://nexomedic.com.pe/empresa</loc>
              </url>
              <url>
              <loc>https://nexomedic.com.pe/productos</loc>
            </url>
            <url>
            <loc>https://nexomedic.com.pe/post-venta</loc>
          </url>
          <url>
          <loc>https://nexomedic.com.pe/servicio-tecnico</loc>
        </url>
        <url>
        <loc>https://nexomedic.com.pe/clientes</loc>
      </url>
      <url>
      <loc>https://nexomedic.com.pe/contactanos</loc>
    </url>
                ${posts.map(post => {
                    return `<url>
                           <loc>${`https://nexomedic.com.pe/producto/${post.meta_title_link}`}</loc> 
                         </url>`
                })}
              </urlset>
    `
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
    const data = await Axios.get(`/api/productos_todo`, {
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
        withCredentials: true,
    })

    const datos = await data.data
    const sitemap = generateSiteMap(datos)
    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()

    return {
        props: {},
    }
}

export default SiteMap

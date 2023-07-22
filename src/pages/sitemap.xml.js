/* const EXTERNAL_DATA_URL = 'https://nexomedic.com.pe/producto'

function generateSiteMap(posts) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
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
     <loc>https://nexomedic.com.pe/postventa</loc>
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
<url>
 <loc>https://nexomedic.com.pe/cotizar</loc>
</url>
     ${posts
         .map(({ id }) => {
             return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `
         })
         .join('')}
   </urlset>
 `
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // We make an API call to gather the URLs for our site
    const request = useSWR('/api/productos_todo', () =>
        axios.get('/api/productos_todo').then(res => res.data),
    )

    const posts = await request.json()

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(posts)

    res.setHeader('Content-Type', 'text/xml')
    // we send the XML to the browser
    res.write(sitemap)
    res.end()

    return {
        props: {},
    }
}

export default SiteMap
 */

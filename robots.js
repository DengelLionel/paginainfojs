export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/mreg/','/nexoper/'],
    },
    sitemap: 'https://nexomedic.com.pe/sitemap.xml',
  }
}
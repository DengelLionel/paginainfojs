/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
      domains:["nexomedic.com.pe","img.freepik.com","res.cloudinary.com","imagenes.nexomedic.com.pe"],
   
     },
   
  }
  
  const withBundleAnalyzer=require('@next/bundle-analyzer')({
    enabled:process.env.ANALYZE==='true'
  })
  module.exports = withBundleAnalyzer(nextConfig)
  

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
      domains:["nexomedic.com.pe","res.cloudinary.com"],
   
     },
   
  }
  
  const withBundleAnalyzer=require('@next/bundle-analyzer')({
    enabled:process.env.ANALYZE==='true'
  })
  module.exports = withBundleAnalyzer(nextConfig)
  

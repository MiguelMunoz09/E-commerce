//aqui se puede anadir, valores para comprimir el sitio en gzip, trabajar con redireccion a nivel de servidor 
//tambien configuraciones como variables de entorno y elementos mas avanzados, como agregar pugling y elementos de 3ros.


//se pueden anadir, cosas tan importantes como agregar rutas, ejemplo en el script async
const { redirect } = require('next/dist/server/api-utils')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig
  // env: {
  //   customKey: 'customValue',
  // },
  // // basePath: '/dist',
  // compress: true,
  // async redirect () {
  //   return [
  //     {
  //     source: '/hola',
  //     destination: '/hi',
  //     permanent: true,
  //   }
  //   ]
    
  // }
}
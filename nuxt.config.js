import pkg from './package'

import fs from 'fs'
//ENABLE FOR PROD
 const privateKey = fs.readFileSync('/etc/letsencrypt/live/ericthewolf.com/privkey.pem', 'utf8');
 const certificate = fs.readFileSync('/etc/letsencrypt/live/ericthewolf.com/cert.pem', 'utf8');
 const ca = fs.readFileSync('/etc/letsencrypt/live/ericthewolf.com/fullchain.pem', 'utf8');

export default {
  mode: 'universal',
  dev: (process.env.NODE_ENV !== 'production'),

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'ericthewolf', name: 'ericthewolf', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  //ENABLE FOR PROD
  //HTTPS Server
   server: {
     port: 443, // default: 3000
     host: 'raspberrypi', // default: localhost
     https: {
       //key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
       //cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
       key: privateKey,
       cert: certificate,
       ca: ca
     }
   },


  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },


  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    //Google analytics module
    '@nuxtjs/google-analytics',
    //nuxt proxy module
    '@nuxtjs/proxy',
 
  ],
axios: {
proxy: true // Can be also an object with default options
},

 proxy: {

    '/hildas': {
      target: "http://raspberrypi:8000/hildas",
      pathRewrite: {
        '^/hildas': '/'
      },
      logLevel: 'debug',
      changeOrigin: true,
      secure: false
    },

    '/mvg': {
      target: "http://raspberrypi:8000/mvg",
      pathRewrite: {
        '^/mvg': '/'
      },
      logLevel: 'debug',
      changeOrigin: true
    },

    '/aptitgarden': {
      target: "http://raspberrypi:8000/aptitgarden",
      pathRewrite: {
        '^/aptitgarden': '/'
      },
      logLevel: 'debug', changeOrigin: true
    },

    '/ullevi': {
      target: "http://raspberrypi:8000/ullevi",
      pathRewrite: {
        '^/ullevi': '/'
      },
      logLevel: 'debug',
      changeOrigin: true
    },

    '/vallagat': {
      target: "http://raspberrypi:8000/vallagat",
      pathRewrite: {
        '^/vallagat': '/'
      },
      logLevel: 'debug',
      changeOrigin: true
    },

    '/matsmak': {
      target: "http://raspberrypi:8000/matsmak",
      pathRewrite: {
        '^/matsmak': '/'
      },
      logLevel: 'debug',
      changeOrigin: true
    },
    
   '/beat': {
      target: "http://raspberrypi:8000/beat",
      pathRewrite: {
        '^/beat': '/'
      },
      logLevel: 'debug',
      changeOrigin: true
    },

  },



  googleAnalytics: {
    id: 'UA-141327209-1'
  },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

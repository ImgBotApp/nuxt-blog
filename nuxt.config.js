module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/vue-social-sharing.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  modules: [
    'nuxtent',
    ['@nuxtjs/google-analytics', { ua: 'UA-107595768-1' }]
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

/*
,
sitemap: {
  hostname: 'http://www.dinamicamente.org',
  generate: true,
  routes: function () {
    return axios.get('http://localhost:3000/content-api').then(res => {
      return res.data.map(page => page.path)
    })
  }
}
*/

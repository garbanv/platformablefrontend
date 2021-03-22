module.exports = {
  siteMetadata: {
    title: `Platformable`,
    description: `We build tools.`,
    author: `@platformable`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        disable: !process.env.SENTRY_DSN, // When do you want to disable it ?
        src: 'https://browser.sentry-cdn.com/5.15.4/bundle.min.js',
        integrity:
          'sha384-Nrg+xiw+qRl3grVrxJtWazjeZmUwoSt0FAVsbthlJ5OMpx0G08bqIq3b/v0hPjhB',
        crossorigin: 'anonymous',
        onLoad: `() => Sentry.init({dsn:"${process.env.SENTRY_DSN}"})`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL:`https://websiteserver-ds7cf.ondigitalocean.app`,
        apiURL: `http://localhost:1337`,
        queryLimit: 5000,
        contentTypes: [`post`, `category`,`user`,`tag`,`page`],
        singleTypes: [`homepage`,`about`],    
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              // usePrefix defaults to false
              // usePrefix: true is the same as ["oembed"]
              usePrefix: ["oembed", "video","embed","script"],
              providers: {
                include: [
                  'Twitter',
                  'Instagram',
                  'Youtube',
                  'Vimeo',
                  'Codesanbox'
                ],
                exclude: ["Reddit"]
              }
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Product','Sku','Subscription', 'Price', 'Customer'],
        secretKey: 'sk_test_51IVzE6Gte9n2W4Jh46D22VTerG8Vr7Ko236oe5wEOk2ekE8AWMhjKtV37rO1co1QHauoeFfAjwOu2wbDdFoXVRtI00H4EHtpxC',
        downloadFiles: true,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

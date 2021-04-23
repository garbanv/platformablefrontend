require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Platformable`,
    description: `We build tools.`,
    author: `@platformable`,
  },
  plugins: [
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
        icon: `src/images/favicon.png`, 
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL:`https://websiteserver-ds7cf.ondigitalocean.app`,
        //apiURL: `http://localhost:1337`,
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
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    },
    // {

    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: [`/app/*`] },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

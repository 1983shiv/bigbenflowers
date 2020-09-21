require('ts-node').register({ files: true });
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `PICKSY.`,
    description: `Kick off your next jamstack ecommerce web app with this PICKSY.`,
    author: `@redq`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typegen`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.GATSBY_SHOP_NAME, // Load from env
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN, // Load from env
        verbose: true,
        paginationSize: 100,
        includeCollections: ['shop'],
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY, // Load from env
        path: '/preview',
        previews: true,
        sharpKeys: [
          /image|photo|picture/, // (default)
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:400,600,700`, `Poppins\:400,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#333',
        showSpinner: false,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: '95',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // manifest plugin should be before offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Picksy`,
        short_name: `Picksy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#292929`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};

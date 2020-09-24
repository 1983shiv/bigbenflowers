require("ts-node").register({ files: true });
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Bigben Flowers.`,
    description: `Wide Range of Flowers and Gifts to Choose From. Fast Delivery within UK. Save upto 50%.`,
    author: `@Shiv Srivastava`,
    return_policy: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam rerum perspiciatis a consectetur, aliquam accusantium quidem hic corporis sit culpa velit facilis suscipit doloremque esse nisi iste veniam quos eligendi sunt minima sequi aut voluptatem tempora repellendus. Reprehenderit, voluptatem nam quibusdam odit ut voluptates iure molestias porro ipsam ad recusandae veritatis vel magni aut totam quisquam molestiae dicta amet est facere delectus voluptate minima dolores. Blanditiis laudantium, mollitia omnis perspiciatis recusandae tenetur animi officiis quod molestias minus optio minima deserunt eius provident? Dolores eos facere quod amet fuga, tempore odit eligendi eius rerum eaque sequi officia cupiditate iure dolorem! Dignissimos cupiditate quidem, magnam ex numquam repellat adipisci unde neque accusantium, ipsam dolorem! Corporis, iure. Adipisci in architecto ipsam suscipit voluptatum, voluptatem consequuntur enim eius ullam dolores sed quos ab vero eligendi voluptas explicabo consectetur provident dolorum quidem aspernatur repellendus, saepe error inventore obcaecati? Error cupiditate tempora, nam voluptate hic dolor neque? Repellendus impedit excepturi consequatur, dicta ratione, voluptas libero sunt ullam sint dolorum rem iste illum? Incidunt minima molestias doloremque aut ipsum atque et quasi vitae. Ipsum accusantium voluptatibus nulla laboriosam iste aperiam possimus id sunt et explicabo, esse culpa non libero maiores qui sit? Doloribus inventore esse cupiditate delectus?`,
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
        includeCollections: ["shop"],
      },
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY, // Load from env
        path: "/preview",
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
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#333",
        showSpinner: false,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: "95",
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

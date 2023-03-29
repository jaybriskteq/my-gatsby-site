/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./content/blog/",
      },
      __key: "pages",
    },
    "gatsby-transformer-remark",
  ],
};

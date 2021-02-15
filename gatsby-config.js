module.exports = {
  siteMetadata: {
    title: 'GitFolio',
    description: 'Your GitHub as your portfolio',
  },
  plugins: [
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    { resolve: `gatsby-plugin-emotion` },
  ],
}

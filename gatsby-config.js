module.exports = {
  siteMetadata: {
    title: 'GitFolio',
    titleTemplate: '%s · The GitHub Portfolio',
    description: 'Your GitHub as your portfolio.',
  },
  plugins: [
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    { resolve: `gatsby-plugin-emotion` },
  ],
}

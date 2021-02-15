module.exports = {
  siteMetadata: {
    title: 'GitFolio',
    titleTemplate: '%s · The Real Hero',
    description:
      'Hogwarts Potions master, Head of Slytherin house and former Death Eater.',
  },
  plugins: [
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    { resolve: `gatsby-plugin-emotion` },
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Contentstack',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentstack',
      options:{
        'api_key':'blt30db331020ed8a66',
        'access_token':'blt74d900c4d54132ca',
        'environment':'development'
      },
    },
    'gatsby-plugin-react-helmet'
  ],
}

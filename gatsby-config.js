module.exports = {
  siteMetadata: {
    title: 'Damien Breaux',
    author: {
      name: 'Damien Breaux',
      summary: 'I pretend to write code, blogs, and watch too much YouTube'
    },
    description: 'This is my(Damien Breaux) personal spot on the interwebs',
    //siteUrl: 'www.google.com',
    social: {
      linkedIn: 'https://www.linkedin.com/in/damien-breaux-67ab30a8/',
      devTo: 'https://dev.to/dlionz',
      twitter: 'https://twitter.com/DamienBreaux',
      github: 'https://github.com/dlionz',
      email: 'mailto:damien@breaux.dev'
    },
    reading: ['The Wheel of Time series: The Shadow Rising (4/14)', 'Berserk']
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ]
}

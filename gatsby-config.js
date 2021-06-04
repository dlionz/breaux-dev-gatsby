module.exports = {
  siteMetadata: {
    title: 'Damien Breaux',
    author: {
      name: 'Damien Breaux',
      summary: 'I pretend to write code, blogs, and watch too much YouTube'
    },
    description: 'This is my (Damien Breaux) personal spot on the interwebs',
    //siteUrl: 'www.google.com',
    social: {
      linkedIn: 'https://www.linkedin.com/in/damienbreaux/',
      devTo: 'https://dev.to/dlionz',
      twitter: 'https://twitter.com/DamienBreaux',
      github: 'https://github.com/dlionz',
      email: 'mailto:damien@breaux.dev'
    },
    reading: ['The Wheel of Time series: The Shadow Rising (4 of 14)', 'Berserk (Finished/Caught up)', 'One Piece (chpater 600 of 1000)', 'Naruto (Finished)', 'Jujutsu Kaisen (Caught up)', 'My Hero Academia (Caught up)'],
    watching: ['She-Ra and the Princesses of Power', 'Avatar: The Last Airbender (Finished)', 'Naruto: Shippuden (Finished)', 'Cowboy BeBop', 'Top Chef Masters (2021)']
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/`
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

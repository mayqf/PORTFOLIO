module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.mustafa.me/',
    title: 'Mustafa - Software Developer',
    description:
      'Mustafa is a Full Stack Web&Python Developer.',
    author: 'Mustafa',
    social: {
      email: 'mayqf@mail.missouri.edu',
      github: 'mayqf',
      linkedin: 'mustfaa',
      kaggle: 'mustafaaydar',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mustafa | Developer Portfolio',
        short_name: 'Mustafa Portfolio',
        start_url: '/',
        background_color: '#212121',
        theme_color: '#212121',
        display: 'minimal-ui',
        icon: 'src/images/NLogo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-use-dark-mode',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-155089569-1',
        head: false,
      },
    },
  ],
};

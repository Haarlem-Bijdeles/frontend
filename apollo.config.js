module.exports = {
  client: {
    service: {
      name: 'carconfigurator',
      url: 'https://api.amsterdambijdeles.nl/graphql',
    },
    includes: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.graphql'],
  },
}

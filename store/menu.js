import MenuQuery from '~/graphql/Menu.gql'

export const state = () => ({
  header: [],
  footer: [],
})

export const mutations = {
  addHeaderMenu(state, data) {
    state.menu.header = data.data.menu
  },
  addFooterMenu(state, data) {
    state.menu.footer = data.data.menu
  },
}

export const actions = {
  async add({ commit }, context) {
    const header = await context.app.apolloProvider.defaultClient.query({
      query: MenuQuery,
      variables: {
        location: 'HEADER_MENU',
      },
    })
    commit('addHeaderMenu', header)

    const footer = await context.app.apolloProvider.defaultClient.query({
      query: MenuQuery,
      variables: {
        location: 'FOOTER_MENU',
      },
    })
    commit('addFooterMenu', footer)
  },
}

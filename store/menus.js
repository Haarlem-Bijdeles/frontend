import MenuQuery from '~/graphql/Menu.gql'

export const state = () => ({
  headerMenu: null,
  footerMenu: null,
})

export const mutations = {
  addHeaderMenu(state, data) {
    state.menu.headerMenu = data.data.menu
  },
  addFooterMenu(state, data) {
    state.menu.footerMenu = data.data.menu
  },
}

export const actions = {
  async add({ commit }, context) {
    const headerMenu = await context.app.apolloProvider.defaultClient.query({
      query: MenuQuery,
      variables: {
        location: 'HEADER_MENU',
      },
    })
    commit('addHeaderMenu', headerMenu)

    const footerMenu = await context.app.apolloProvider.defaultClient.query({
      query: MenuQuery,
      variables: {
        location: 'FOOTER_MENU',
      },
    })
    commit('addFooterMenu', footerMenu)
  },
}

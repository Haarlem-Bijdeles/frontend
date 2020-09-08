import SiteDetailsQuery from '~/graphql/SiteDetails.gql'

export const state = () => ({
  siteDetails: null,
})

export const mutations = {
  add(state, data) {
    state.siteDetails = data.data.siteDetails
  },
}

export const actions = {
  async add({ commit }, context) {
    const siteDetails = await context.app.apolloProvider.defaultClient.query({
      query: SiteDetailsQuery,
    })
    commit('addSiteDetails', siteDetails)
  },
}

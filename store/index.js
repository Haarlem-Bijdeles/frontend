import TestimonialsQuery from '~/graphql/Testimonials.gql'
import MenuQuery from '~/graphql/Menu.gql'
import SiteDetailsQuery from '~/graphql/SiteDetails.gql'

export const state = () => ({
  testimonials: [],
  menu: {
    header: [],
    footer: [],
  },
  siteDetails: null,
})

export const mutations = {
  add(state, data) {
    state.testimonials = data.data.testimonials
  },
  addHeaderMenu(state, data) {
    state.menu.header = data.data.menu
  },
  addFooterMenu(state, data) {
    state.menu.footer = data.data.menu
  },
  addSiteDetails(state, data) {
    state.siteDetails = data.data.siteDetails
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, context) {
    await dispatch('testimonials2/add', context)

    const testimonials = await context.app.apolloProvider.defaultClient.query({
      query: TestimonialsQuery,
      variables: {
        first: 3,
      },
    })
    commit('add', testimonials)

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

    const siteDetails = await context.app.apolloProvider.defaultClient.query({
      query: SiteDetailsQuery,
    })
    commit('addSiteDetails', siteDetails)
  },
}

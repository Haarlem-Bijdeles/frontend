import TestimonialsQuery from '~/graphql/Testimonials.gql'

export const state = () => ({
  testimonials: [],
})

export const mutations = {
  add(state, data) {
    state.testimonials = data.data.testimonials
  },
}

export const actions = {
  async add({ commit }, context) {
    const testimonials = await context.app.apolloProvider.defaultClient.query({
      query: TestimonialsQuery,
      variables: {
        first: 3,
      },
    })
    commit('add', testimonials)
  },
}

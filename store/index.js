export const actions = {
  async nuxtServerInit({ commit, dispatch }, context) {
    await dispatch('testimonials/add', context)
    await dispatch('menu/add', context)
    await dispatch('siteDetails/add', context)
  },
}

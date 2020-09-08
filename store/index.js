export const actions = {
  async nuxtServerInit({ commit, dispatch }, context) {
    await dispatch('testimonials/add', context)
    await dispatch('menus/add', context)
    await dispatch('siteDetails/add', context)
  },
}

export const state = () => ({
  locales: ['nl'],
  locale: 'nl',
  step: 0,
  details: null,
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_STEP(state, step) {
    state.step = step
  },
  SET_DETAILS(state, data) {
    state.details = data
  },
}

export const actions = {
  async nuxtServerInit({ commit }, app) {
    const response = await app.$axios.$get('/site/v1/details')
    await commit('SET_DETAILS', response)
  },
}

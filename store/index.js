export const state = () => ({
  locales: ['nl'],
  locale: 'nl',
  step: 0,
  details: {},
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
  SET_DETAILS(state) {
    state.details = state
  },
}

export const actions = {
  nuxtServerInit({ commit }) {
    commit('SET_DETAILS', '123')
  },
}

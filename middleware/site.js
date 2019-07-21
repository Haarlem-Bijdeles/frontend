export default function({ isHMR, app, store }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  // Get locale from params
  // Set locale
  store.commit('SET_DETAILS')
  app.details = store.state.details
}

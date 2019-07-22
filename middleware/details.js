export default function({ isHMR, app, store }) {
  // If middleware is called from hot module replacement, ignore it
  // if (isHMR) return
  store.commit('SET_DETAILS')
}

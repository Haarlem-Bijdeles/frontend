export default {
  id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_KEY,
  set: [{ field: 'anonymizeIp', value: true }],
  dev: false,
  disabled: () => {
    const doNotTrack =
      navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack
    if (doNotTrack !== '1' && doNotTrack !== 'yes') {
      return false
    }
    return true
  },
}

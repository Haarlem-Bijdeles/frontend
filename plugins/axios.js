import EventBusUtil from '~/utils/eventBusUtil'

export default function ({ $axios }, inject) {
  const http = $axios.create()

  http.interceptors.response.use(
    (response) => response,
    (error) => {
      EventBusUtil.$emit('axios-interceptor-throws-error', error)
      return Promise.reject(error)
    },
  )
  inject('http', http)
}

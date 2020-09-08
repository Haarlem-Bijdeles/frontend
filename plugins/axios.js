import EventBusUtil from '~/utils/eventBusUtil'

export default function ({ $axios }) {
  $axios.onError((error) => {
    EventBusUtil.$emit('axios-interceptor-throws-error', error)
  })
}

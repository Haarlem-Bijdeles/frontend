import axios from '~/plugins/axios'

export default function(context) {
  axios.get('/site/v1/details').then(data => (context.details = data))
}

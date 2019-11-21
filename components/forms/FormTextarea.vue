<template>
  <form-field
    :id="id"
    :error-message="errorMessage"
    :title="title"
    class="field"
  >
    <textarea
      :id="id"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </form-field>
</template>

<script>
import FormField from '~/components/forms/FormField.vue'
import RandomProp from '~/mixins/random.js'

export default {
  components: {
    FormField,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    id: RandomProp,
    value: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },
}
</script>

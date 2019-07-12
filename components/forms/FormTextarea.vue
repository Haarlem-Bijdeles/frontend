<template>
  <div class="field">
    <label ref="label" :for="id">{{ title }}</label>
    <textarea
      :id="id"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <span aria-live="assertive">{{ errorMessage }}</span>
  </div>
</template>

<script>
import RandomProp from '~/mixins/random.js'
export default {
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
      required: false,
      default: '',
    },
  },
}
</script>

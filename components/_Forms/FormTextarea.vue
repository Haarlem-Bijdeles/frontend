<template>
  <form-field :id="id" :error-message="errorMessage" :title="title">
    <textarea
      :id="id"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="field"
    />
  </form-field>
</template>

<script>
import FormField from '~/components/Forms/FormField.vue'
import RandomProp from '~/mixins/random.js'

export default {
  components: {
    FormField,
  },
  inheritAttrs: false,
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

<style scoped>
.field {
  @mixin form-field;
  resize: vertical;
}
</style>

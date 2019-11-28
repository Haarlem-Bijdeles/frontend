<template>
  <form-field :id="id" :error-message="errorMessage" :title="title">
    <input
      :id="id"
      v-bind="$attrs"
      :value="value"
      :type="type"
      :maxlength="maxlength"
      class="field"
      @input="$emit('input', $event.target.value)"
    />
  </form-field>
</template>

<script>
import FormField from '~/components/Forms/FormField.vue'

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
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      required: true,
    },
    maxlength: {
      type: Number,
      default: 50,
    },
    errorMessage: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped>
.field {
  @mixin form-field;
}
</style>

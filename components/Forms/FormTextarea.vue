<template>
  <form-field :id="id" :error-message="errorMessage" :title="title">
    <textarea
      :id="id"
      v-bind="$attrs"
      :value="value"
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

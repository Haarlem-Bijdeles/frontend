<template>
  <form-field :id="id" :error-message="errorMessage" :title="title">
    <input
      :id="id"
      v-bind="$attrs"
      :value="value"
      :type="type"
      :maxlength="maxlength"
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

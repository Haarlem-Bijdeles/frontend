<template>
  <div class="form-item">
    <label :for="id" class="label">{{ title }}</label>
    <slot />
    <error-message :error-message="errorMessage" />
  </div>
</template>

<script>
import ErrorMessage from '@/components/forms/ErrorMessage.vue'

export default {
  components: {
    ErrorMessage,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
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
.label {
  display: block;
  margin-bottom: 0.25em;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}
</style>

<template>
  <div class="form-item">
    <label :for="id" class="label">{{ title }}</label>
    <slot />
    <error-message :error-message="errorMessage" />
  </div>
</template>

<script>
import ErrorMessage from '~/components/Forms/ErrorMessage.vue'

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
  margin-bottom: var(--spacing-xxs);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
}
</style>

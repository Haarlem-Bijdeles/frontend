<template>
  <fieldset class="fieldset">
    <legend class="sr-only">{{ title }}</legend>
    <div class="fields">
      <slot />
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.fieldset {
  border: 0;
  padding: 0;
  margin: 0;
  min-width: 0;
}

.fields {
  display: grid;
  grid-gap: var(--gutter);
}
</style>

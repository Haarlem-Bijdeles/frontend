<template>
  <fieldset>
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
.fields {
  display: grid;
  grid-gap: 1em;
}
</style>

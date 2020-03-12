<template>
  <ul v-if="servicesGroup.services.length" class="list">
    <services-list-item
      v-for="service in servicesGroup.services"
      :key="service.title"
      :service="service"
      class="item"
    />
  </ul>
</template>

<script>
import ServicesListItem from '~/components/Services/ServicesListItem.vue'

export default {
  components: {
    ServicesListItem,
  },
  props: {
    servicesGroup: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
  display: grid;
  grid-gap: var(--gutter);
  margin-bottom: var(--spacing-l);
  grid-template-columns: repeat(auto-fit, minmax(14em, 1fr));
}
</style>

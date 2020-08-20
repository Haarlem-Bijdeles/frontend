<template>
  <apollo-query
    :query="require('~/graphql/Menu/Menu.gql')"
    :variables="{
      hotelPageId: hotelPageId[this.$i18n.locale],
      environmentPageId: environmentPageId[this.$i18n.locale],
      language: $i18n.locale.toUpperCase(),
    }"
  >
    <template v-slot="{ result: { data }, isLoading }">
      <app-loader v-if="isLoading" />
      <slot
        v-else-if="data"
        :hotel="data.hotel"
        :environment="data.environment"
        :arrangements="data.arrangements"
        :rooms="data.rooms"
        :menuItems="data.menuItems"
      />
    </template>
  </apollo-query>
</template>

<script>
import AppLoader from '~/components/Shared/AppLoader.vue'
import { hotelPageId, environmentPageId } from '~/data/pages'

export default {
  components: {
    AppLoader,
  },
  data() {
    return {
      hotelPageId,
      environmentPageId,
    }
  },
}
</script>

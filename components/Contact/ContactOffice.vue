<template>
  <div>
    <image-archive
      v-if="office.image"
      :image="office.image"
      class="image-archive"
    />

    <span class="street">{{ office.street }}</span>
    {{ office.zipcode }}, {{ office.city }}
    <br />
    <a
      :href="`https://www.google.com/maps?daddr=${office.street}%20${office.city}`"
      target="_blank"
      rel="noopener"
      class="contact__btn-route"
      >{{ $t('direction') }}</a
    >
  </div>
</template>

<script>
import ImageArchive from '~/components/Images/ImageArchive.vue'

export default {
  components: {
    ImageArchive,
  },
  props: {
    office: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.image-archive {
  margin-bottom: var(--spacing-xs);
  height: 12em;
}

.street {
  display: block;
  font-weight: var(--font-weight-bold);
}
</style>

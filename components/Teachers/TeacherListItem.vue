<template>
  <li class="item">
    {{ teacher.featuredImage }}
    <archive-wrapper :image="teacher.image">
      <template v-slot:title>
        <!-- eslint-disable-next-line -->
        <span v-html="teacher.name" />
      </template>

      <!-- eslint-disable-next-line -->
      <p v-html="teacher.bio" />

      <social-media-links
        v-if="teacher.socialMedia"
        :title="teacher.name"
        :social-media="teacher.socialMedia"
      />
    </archive-wrapper>
  </li>
</template>

<script>
import ArchiveWrapper from '@/components/ArchiveWrapper.vue'
import SocialMediaLinks from '@/components/SocialMediaLinks.vue'

export default {
  components: {
    ArchiveWrapper,
    SocialMediaLinks,
  },
  props: {
    teacher: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.item:nth-child(2n) >>> .image-wrapper {
  order: 2;
  @media (--viewport-sm) {
    padding: 0 0 0 var(--gutter);
  }
}
</style>

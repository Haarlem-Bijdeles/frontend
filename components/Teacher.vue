<template>
  <li class="item">
    <archive-wrapper :images="teacher.images">
      <template v-slot:title>
        <!-- eslint-disable-next-line -->
        <span v-html="teacher.name" />
      </template>

      <!-- eslint-disable-next-line -->
      <p v-html="teacher.bio" />

      <social-media-links
        :title="teacher.name"
        :facebook-url="teacher.facebook"
        :twitter-url="teacher.twitter"
        :linked-in-url="teacher.linkedin"
        :instagram-url="teacher.instagram"
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

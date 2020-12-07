<template>
  <li class="item">
    {{ teacher.featuredImage }}
    <archive-wrapper :image="teacher.image">
      <template #title>
        <!-- eslint-disable-next-line -->
        <span v-html="teacher.name" />
      </template>

      <!-- eslint-disable-next-line -->
      <p v-html="teacher.bio" />

      <social-media-links
        v-if="hasSocialMedia"
        :title="teacher.name"
        :social-media="socialMedia"
      />
    </archive-wrapper>
  </li>
</template>

<script>
import ArchiveWrapper from '~/components/ArchiveWrapper.vue'
import SocialMediaLinks from '~/components/SocialMediaLinks.vue'

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
  computed: {
    socialMedia() {
      const socialMedia = {}
      const { teacher } = this
      if (teacher.facebook) socialMedia.facebook = teacher.facebook
      if (teacher.twitter) socialMedia.twitter = teacher.twitter
      if (teacher.linkedin) socialMedia.linkedin = teacher.linkedin
      if (teacher.instagram) socialMedia.instagram = teacher.instagram
      return socialMedia
    },
    hasSocialMedia() {
      return Object.keys(this.socialMedia).length
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

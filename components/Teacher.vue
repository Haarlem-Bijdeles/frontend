<template>
  <li class="item">
    <archive-wrapper :image="post.image">
      <template v-slot:title>
        <!-- eslint-disable-next-line -->
        <span v-html="post.title.rendered" />
      </template>

      <!-- eslint-disable-next-line -->
      <p v-html="post.excerpt.rendered" />

      <social-media-links
        :title="post.title.rendered"
        facebook-url="https://www.facebook.com/haarlembijdeles"
        twitter-url="https://twitter.com/haarlembijdeles"
        linked-in-url="https://www.linkedin.com/company-beta/5025367/"
        instagram-url="https://www.instagram.com/haarlembijdeles/"
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
    post: {
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

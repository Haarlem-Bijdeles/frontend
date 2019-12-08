<template>
  <clickable-list-item :url="post.slug" class="list-item">
    <archive-wrapper :image="post.featuredImage">
      <template v-slot:title>
        <!-- eslint-disable-next-line -->
        <router-link :to="post.slug" v-html="post.title" class="link" />
      </template>
      <div class="meta">
        <post-date :date="post.date" />
      </div>
      <!-- eslint-disable-next-line -->
      <div v-html="post.excerpt" />

      <read-more-link class="read-more" />
    </archive-wrapper>
  </clickable-list-item>
</template>

<script>
import PostDate from '@/components/Blog/PostDate.vue'
import ArchiveWrapper from '@/components/ArchiveWrapper.vue'
import ClickableListItem from '@/components/Shared/ClickableListItem.vue'
import ReadMoreLink from '@/components/Shared/ReadMoreLink.vue'

export default {
  components: {
    PostDate,
    ArchiveWrapper,
    ClickableListItem,
    ReadMoreLink,
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
.item {
  cursor: pointer;
  background: linear-gradient(
    to bottom,
    var(--color-gray-light) 0,
    var(--color-white) 20rem
  );
}

.link {
  @mixin link-reset;
}

.social {
  font-size: 0.9em;
}

.archive__icon {
  @include icon(1.5em);
  margin-right: var(--spacing-xxs);
}
</style>

<template>
  <clickable-list-item :url="url" class="list-item">
    <archive-wrapper :image="post.featuredImage">
      <template #title>
        <router-link :to="url" class="link" v-html="post.title" />
      </template>
      <div class="meta">
        <post-date :date="post.date" />
      </div>
      <div v-html="post.excerpt" />

      <read-more-link aria-hidden="true" class="read-more" />
    </archive-wrapper>
  </clickable-list-item>
</template>

<script>
import PostDate from '~/components/Blog/PostDate.vue'
import ArchiveWrapper from '~/components/ArchiveWrapper.vue'
import ClickableListItem from '~/components/Shared/ClickableListItem.vue'
import ReadMoreLink from '~/components/Shared/ReadMoreLink.vue'

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
  computed: {
    url() {
      return `/wie-zijn-wij/blog/${this.post.slug}/`
    },
  },
}
</script>

<style lang="postcss" scoped>
.item {
  cursor: pointer;
  background: linear-gradient(
    to bottom,
    var(--color-gray-lighter) 0,
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

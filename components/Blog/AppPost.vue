<template>
  <li @mousedown="mouseDown" @mouseup="mouseUp" class="item">
    <archive-wrapper :image="post.featuredImage">
      <template v-slot:title>
        <!-- eslint-disable-next-line -->
        <router-link :to="post.slug" v-html="post.title" class="link" />
      </template>

      <div class="meta">
        <post-date :date="post.date" />
      </div>
      <!-- eslint-disable-next-line -->
      <p v-html="post.excerpt" />

      <div class="link-wrapper">
        <span class="read-more">
          {{ $t('readMore') }}
          <icon-chevron-right aria-hidden="true" width="16" height="16" />
        </span>
      </div>
    </archive-wrapper>
  </li>
</template>

<script>
import PostDate from '@/components/Blog/PostDate.vue'
import IconChevronRight from '@/icons/chevron-right.svg'
import ArchiveWrapper from '@/components/ArchiveWrapper.vue'

export default {
  components: {
    PostDate,
    IconChevronRight,
    ArchiveWrapper,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      down: null,
    }
  },
  methods: {
    mouseUp() {
      const up = +new Date()
      if (up - this.down < 200) {
        this.goToPost()
      }
    },
    mouseDown() {
      this.down = +new Date()
    },
    goToPost() {
      this.$router.push(this.post.slug)
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
  margin-right: 0.25em;
}
</style>

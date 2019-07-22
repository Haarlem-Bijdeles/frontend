<template>
  <ul v-if="posts.length" class="list">
    <app-post v-for="post in posts" :key="post.slug" :post="post" />
  </ul>
</template>

<script>
import AppPost from '~/components/Blog/AppPost.vue'

export default {
  components: {
    AppPost,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>

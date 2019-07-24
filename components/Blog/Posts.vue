<template>
  <div>
    <ul v-if="posts.length" class="list">
      <app-post v-for="post in posts" :key="post.node.id" :post="post.node" />
    </ul>
  </div>
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
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>

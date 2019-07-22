<template>
  <div>
    <app-hero
      image="https://www.haarlembijdeles.nl/wp-content/uploads/2017/09/170208_Bijdeles_64_HR-1140x0-c-default.jpg"
      title="Bijdeles Blog"
    />
    <posts :posts="posts" />
  </div>
</template>

<script>
import Posts from '~/components/Blog/Posts.vue'
import AppHero from '@/components/AppHero.vue'

export default {
  components: {
    Posts,
    AppHero,
  },
  meta: {
    step: 4,
  },
  data() {
    return {
      title: this.$t('biography'),
    }
  },
  head() {
    return {
      title: 'Home',
    }
  },
  async asyncData({ $axios, params }) {
    const response = await $axios.get(`wp/v2/posts/`)
    return {
      posts: response.data,
    }
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>

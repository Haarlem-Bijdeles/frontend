<template>
  <div>
    <app-hero :image="blog.featuredImage" :title="blog.title" />
    <div v-if="posts.edges && posts.edges.length">
      <posts :posts="posts.edges" />
    </div>
    <button v-if="posts.pageInfo.hasPreviousPage" @click="previousPage">
      previousPage
    </button>
    {{ posts.pageInfo.startCursor }}
    <button v-if="posts.pageInfo.hasNextPage" @click="nextPage">
      nextpage
    </button>
  </div>
</template>

<script>
import Posts from '~/components/Blog/Posts.vue'
import AppHero from '@/components/AppHero.vue'
import PostQuery from '~/graphql/Posts.gql'
import BlogQuery from '~/graphql/Blog.gql'

export default {
  components: {
    Posts,
    AppHero,
  },
  meta: {
    step: 4,
  },
  // data() {
  //   return {
  //     posts: '',
  //   }
  // },
  head() {
    return {
      title: 'Home',
    }
  },
  methods: {
    nextPage() {
      this.$apollo.queries.posts.refetch({
        after: this.posts.pageInfo.endCursor,
        first: 2,
      })
    },
    previousPage() {
      this.$apollo.queries.posts.refetch({
        before: this.posts.pageInfo.startCursor,
        last: 2,
      })
    },
    testa() {
      this.$apollo.queries.posts.fetchMore({
        // New variables
        variables: {
          after: this.posts.pageInfo.endCursor,
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          return {
            __typename: previousResult.posts.__typename,
            // Merging the tag list
            posts: [...previousResult.posts, ...fetchMoreResult.posts],
          }
        },
      })
    },
  },

  apollo: {
    blog: BlogQuery,
    posts: {
      query: PostQuery,
      variables: {
        first: 3,
      },
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>

<template>
  <div>
    <app-hero :image="page.featuredImage" :title="page.title" />
    <div v-if="posts.edges && posts.edges.length">
      <posts :posts="posts.edges" />
    </div>
    <button v-if="showMoreButton" @click="showMore">show more</button>
  </div>
</template>

<script>
import Posts from '~/components/Blog/Posts.vue'
import AppHero from '@/components/AppHero.vue'
import PostsQuery from '~/graphql/Posts.gql'
import BlogQuery from '~/graphql/Blog.gql'

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
      page: 0,
      showMoreButton: true,
    }
  },
  head() {
    return {
      title: this.page.title,
    }
  },
  async asyncData({ app, params }) {
    const blog = await app.apolloProvider.defaultClient.query({
      query: BlogQuery,
    })
    return {
      page: blog.data.blog,
    }
  },
  apollo: {
    // Pages
    posts: {
      query: PostsQuery,
      variables: {
        first: 2,
      },
    },
  },
  methods: {
    showMore() {
      // Fetch more data and transform the original result
      this.$apollo.queries.posts.fetchMore({
        // New variables
        variables: {
          after: this.posts.pageInfo.endCursor,
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newPosts = fetchMoreResult.posts
          this.showMoreButton = fetchMoreResult.posts.pageInfo.hasNextPage

          return {
            posts: {
              __typename: previousResult.posts.__typename,
              pageInfo: newPosts.pageInfo,
              // Merging the tag list
              edges: [...previousResult.posts.edges, ...newPosts.edges],
            },
          }
        },
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
.list {
  @mixin list-reset;
}
</style>

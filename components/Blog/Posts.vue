<template>
  <div v-if="posts">
    <ul v-if="posts.edges.length" class="list">
      <app-post
        v-for="post in posts.edges"
        :key="post.node.id"
        :post="post.node"
      />
    </ul>

    <div class="button-wrapper">
      <app-button
        v-if="posts.pageInfo.hasNextPage"
        button-style="ghost"
        @click="showMore"
      >
        {{ $t('showMorePosts') }}
      </app-button>
    </div>
  </div>
</template>

<script>
import AppPost from '~/components/Blog/AppPost.vue'
import PostsQuery from '~/graphql/Posts.gql'
import AppButton from '@/components/Shared/AppButton.vue'

export default {
  components: {
    AppButton,
    AppPost,
  },

  apollo: {
    // Pages
    posts: {
      query: PostsQuery,
      variables() {
        return {
          first: 5,
          notIn: this.notIn,
        }
      },
    },
  },
  props: {
    notIn: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      posts: null,
    }
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

.button-wrapper {
  padding-top: var(--spacing-m);
  padding-bottom: var(--spacing-m);
  @mixin center;
}
</style>

<i18n>
{
  "nl": {
    "showMorePosts": "Toon meer berichten"
  }
}
</i18n>

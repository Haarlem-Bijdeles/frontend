<template>
  <div>
    <page :page="page" />
    <teacher-list
      v-if="page.employersGroup"
      :teachers="page.employersGroup.employers"
    />
    <videos v-if="page.videosGroup" :videos="videos" />
  </div>
</template>

<script>
import TeachersQuery from '~/graphql/PageTeachers.gql'
import TeacherList from '~/components/Teachers/TeacherList.vue'
import Videos from '~/components/Videos.vue'
import Page from '~/components/Page.vue'
import getSeoMetaData from '~/helpers/seo'
import pages from '~/config/pages'

export default {
  name: 'PageTeachers',
  components: {
    TeacherList,
    Page,
    Videos,
  },

  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: TeachersQuery,
      variables: {
        pageId: pages.teachers,
      },
    })
    return {
      page: page.data.page,
    }
  },
  head() {
    return getSeoMetaData(this.page.seo)
  },
  computed: {
    videos() {
      const array = []
      const { page } = this

      if (page.videosGroup) {
        const { videosGroup } = page
        if (videosGroup.video1) {
          array.push(videosGroup.video1)
        }
        if (videosGroup.video2) {
          array.push(videosGroup.video2)
        }
      }
      return array
    },
  },
  nuxtI18n: {
    paths: {
      nl: '/wie-zijn-wij/de-docenten',
    },
  },
}
</script>

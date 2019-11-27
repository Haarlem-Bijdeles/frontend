<template>
  <div>
    <page v-if="page" :page="page" />
    <teacher-list
      v-if="page.employersGroup"
      :teachers="page.employersGroup.employers"
    />
  </div>
</template>

<script>
import TeachersQuery from '~/graphql/PageTeachers.gql'
import TeacherList from '@/components/Teachers/TeacherList.vue'
import Page from '@/components/Page.vue'

export default {
  components: {
    TeacherList,
    Page,
  },

  async asyncData({ app, params }) {
    const page = await app.apolloProvider.defaultClient.query({
      query: TeachersQuery,
      variables: {
        uri: 'wie-zijn-wij/de-docenten/',
      },
    })
    return {
      page: page.data.page,
    }
  },
  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>

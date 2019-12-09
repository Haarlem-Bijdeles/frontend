<template>
  <ul v-if="teachers.length" class="list">
    <teacher-list-item
      v-for="teacher in teachers"
      :key="teacher.name"
      :teacher="teacher"
    />
  </ul>
</template>

<script>
import TeacherListItem from '~/components/Teachers/TeacherListItem.vue'
export default {
  components: {
    TeacherListItem,
  },
  props: {
    teachers: {
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

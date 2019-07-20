<template>
  <div>
    <ul v-if="teachers.length" class="list">
      <teacher
        v-for="teacher in teachers"
        :key="teacher.name"
        :teacher="teacher"
      />
    </ul>
  </div>
</template>

<script>
import Teacher from '~/components/Teacher.vue'
export default {
  components: {
    Teacher,
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

<template>
  <div>
    <student-parent
      :students="forStudentsAndParents.forStudents"
      :parents="forStudentsAndParents.forParents"
    />
    <!-- <prices prices="service.prices" /> -->
  </div>
</template>

<script>
// import Prices from '@/components/Prices.vue'
import StudentParent from '@/components/StudentParent.vue'

export default {
  components: {
    StudentParent,
    // Prices,
  },
  props: {
    forStudentsAndParents: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

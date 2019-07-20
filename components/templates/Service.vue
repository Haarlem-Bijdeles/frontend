<template>
  <div>
    <student-parent :students="service.students" :parents="service.parents" />
    <prices :prices="service.prices" />
  </div>
</template>

<script>
import Prices from '@/components/Prices.vue'
import StudentParent from '@/components/StudentParent.vue'

export default {
  components: {
    StudentParent,
    Prices,
  },
  props: {
    service: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

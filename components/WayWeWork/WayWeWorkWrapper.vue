<template>
  <way-we-work :methods="page.methods" />
</template>

<script>
import WayWeWork from '@/components/WayWeWork/WayWeWork.vue'

export default {
  components: {
    WayWeWork,
  },
  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

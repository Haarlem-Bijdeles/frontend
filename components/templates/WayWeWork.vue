<template>
  <way-we-work :methods="page.way_we_work" />
</template>

<script>
import WayWeWork from '@/components/WayWeWork.vue'

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

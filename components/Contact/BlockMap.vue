<template>
  <gmap-map
    v-if="offices.length"
    ref="refMap"
    :center="center"
    :zoom="15"
    class="map"
  >
    <gmap-marker
      v-for="(office, index) in offices"
      :key="office.zipcode"
      :icon="icon"
      :position="getPosition(office)"
      :clickable="true"
      @click="toggleInfoWindow(office, index)"
    />
    <gmap-info-window
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen = false"
    />
  </gmap-map>
</template>

<script>
export default {
  props: {
    offices: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      icon: {
        url: '/images/marker@2x.png',
        size: { width: 30, height: 30 },
        scaledSize: { width: 30, height: 30 },
      },
      infoWindowPos: null,
      infoWinOpen: false,
      currentID: null,
      infoOptions: {
        content: '',
        // optional: offset infowindow so it visually sits nicely on top of our marker
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    }
  },
  computed: {
    center() {
      return this.getPosition(this.offices[0])
    },
  },
  mounted() {
    this.boundMap()
  },
  methods: {
    getPosition(office) {
      return {
        lat: office.latitude,
        lng: office.longitude,
      }
    },
    boundMap() {
      if (this.offices.length < 2) {
        return
      }
      // this.$refs.refMap.$mapPromise.then((map) => {
      //   const bounds = new window.google.maps.LatLngBounds()
      //   this.offices.forEach((location) => {
      //     const position = new window.google.maps.LatLng(
      //       location.latitude,
      //       location.longitude,
      //     )
      //     bounds.extend(position)
      //   })
      //   map.fitBounds(bounds)
      // })
    },
    toggleInfoWindow(marker, ID) {
      // this.infoWindowPos = this.getPosition(marker)
      // this.infoOptions.content = `<strong>${marker.street}</strong><br>${marker.zipcode}, ${marker.city}`
      // // check if its the same marker that was selected if yes toggle
      // if (this.currentID === ID) {
      //   this.infoWinOpen = !this.infoWinOpen
      // } else {
      //   // if different marker set infowindow to open and reset current marker index
      //   this.infoWinOpen = true
      //   this.currentID = ID
      // }
    },
  },
}
</script>

<style lang="postcss" scoped>
.map {
  width: 100%;
  height: 20em;
}

strong {
  display: none;
}
</style>

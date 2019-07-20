<template>
  <notch-wrapper v-if="offices.length">
    <gmap-map ref="refMap" :center="offices[0].position" :zoom="15" class="map">
      <gmap-marker
        v-for="(office, index) in offices"
        :key="office.zipcode"
        :icon="icon"
        :position="office.position"
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
  </notch-wrapper>
</template>

<script>
import NotchWrapper from '@/components/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper,
  },
  props: {
    offices: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      icon: {
        url:
          'https://www.haarlembijdeles.nl/wp-content/themes/haarlembijdeles/assets/images/marker@2x.png',
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
  mounted() {
    this.boundMap()
  },
  methods: {
    boundMap() {
      this.$refs.refMap.$mapPromise.then(map => {
        const bounds = new window.google.maps.LatLngBounds()
        this.offices.forEach(location => {
          const position = new window.google.maps.LatLng(
            location.position.lat,
            location.position.lng,
          )
          bounds.extend(position)
        })

        map.fitBounds(bounds)
      })
    },
    toggleInfoWindow: function(marker, ID) {
      this.infoWindowPos = marker.position
      this.infoOptions.content = `<strong>${marker.street}</strong><br>${marker.zipcode}, ${marker.city}`

      // check if its the same marker that was selected if yes toggle
      if (this.currentID === ID) {
        this.infoWinOpen = !this.infoWinOpen
      } else {
        // if different marker set infowindow to open and reset current marker index
        this.infoWinOpen = true
        this.currentID = ID
      }
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

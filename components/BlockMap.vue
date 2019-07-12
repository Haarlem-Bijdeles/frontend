<template>
  <notch-wrapper>
    <GmapMap
      ref="refMap"
      :center="locations[0].position"
      :zoom="15"
      class="map"
    >
      <GmapMarker
        v-for="location in locations"
        :key="location.zipcode"
        :position="location.position"
      />
    </GmapMap>
  </notch-wrapper>
</template>

<script>
import NotchWrapper from '@/components/NotchWrapper.vue'

export default {
  components: {
    NotchWrapper,
  },
  data() {
    return {
      locations: [
        {
          street: 'Jansstraat 33',
          zipcode: '2011RT',
          city: 'Haarlem',
          position: {
            lat: 52.383692,
            lng: 4.63842,
          },
        },
        {
          street: 'Wagenweg 21',
          zipcode: '2012NA',
          city: 'Haarlem',
          position: {
            lat: 52.37357,
            lng: 4.628682,
          },
        },
      ],
    }
  },
  mounted() {
    this.$refs.refMap.$mapPromise.then(map => {
      const bounds = new window.google.maps.LatLngBounds()

      this.locations.forEach(location => {
        const position = new window.google.maps.LatLng(
          location.position.lat,
          location.position.lng,
        )
        bounds.extend(position)
      })

      map.fitBounds(bounds)
    })
  },
}
</script>

<style lang="postcss" scoped>
.map {
  width: 100%;
  height: 20em;
}
</style>

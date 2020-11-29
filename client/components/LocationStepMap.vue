<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      @click="setMarker"
    >
      <l-tile-layer :url="url" />
      <l-marker :lat-lng="marker" v-if="marker" />
    </l-map>
  </div>
</template>

<style scoped>
div {
  height: 50vh;
  border-radius: 1em;
}
</style>

<script>
export default {
  computed: {
    marker: function() {
      return this.$store.state.marker;
    }
  },
  data() {
    return {
      zoom: 11,
      center: [-20.225153682432275, 57.55093796339634],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
  },
  methods: {
    setMarker: function(e) {
      this.$store.commit('setMarker', [e.latlng.lat, e.latlng.lng]);
    }
  }
}
</script>

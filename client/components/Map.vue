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
}
</style>

<script>
export default {
  data() {
    return {
      marker: null,
      zoom: 11,
      center: [-20.225153682432275, 57.55093796339634],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
  },
  methods: {
    setMarker: function(e) {
      this.marker = [e.latlng.lat, e.latlng.lng];
    }
  }
}
</script>

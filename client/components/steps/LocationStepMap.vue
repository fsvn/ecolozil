<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      @click="setMarker"
    >
      <l-tile-layer :url="url" />
      <l-marker :lat-lng="marker" v-if="marker" />

      <l-marker
        v-for="driver in drivers"
        :key="driver._id"
        :lat-lng="driver.location" />
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
      drivers: {},
      center: [-20.23362167787819, 57.49720573425294],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
  },
  methods: {
    setMarker: function(e) {
      this.$store.commit('setMarker', [e.latlng.lat, e.latlng.lng]);
    }
  },
  created() {
    //console.log('retrieving driver list');
    //this.drivers = await this.$axios.get('/api/driver/list');

    setInterval(async () => {
      console.log('retrieving driver list');
      let res = await this.$axios.get('/api/driver/list');
      this.drivers = res.data;
    }, 3000)
  }
}
</script>

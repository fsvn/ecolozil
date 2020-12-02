<template>
  <div>
    <l-map
      :zoom="zoom"
      :center="center"
      @click="setMarker"
    >
      <l-tile-layer :url="url" />
      <l-marker :lat-lng="location" v-if="location" />
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
    driver: function() {
      return this.$store.state.driver;
    }
  },
  data() {
    return {
      zoom: 11,
      location: null,
      center: [-20.23362167787819, 57.49720573425294],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
  },
  methods: {
    setMarker: async function(e) {
      this.location = e.latlng;
      await this.$axios.post('/api/driver/location', {
        _id: this.driver._id,
        location: this.location
      });
      console.log('sent driver position');
    }
  }
}
</script>

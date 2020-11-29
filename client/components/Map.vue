<template>
  <div id="map-wrap" style="height: 50vh">
    <l-map :zoom=10 :center="[-20.225153682432275, 57.55093796339634]">
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
export default {

}
</script>

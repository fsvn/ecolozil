<template>
  <div>
    <p>Met ou man linformasion pu complet ou asa.</p>

    <div style="margin-bottom: 1em">
      <BaseInput type="text" placeholder="Nom" @keydown.native="onName" />
      <BaseInput type="text" placeholder="Dernie Nom" @keydown.native="onName" />
      <BaseInput type="text" placeholder="Email" @keydown.native="onEmail" />
      <BaseInput type="text" placeholder="Nimero Telefonn" @keydown.native="onPhone" />
    </div>

    <BaseButton @click.native="buy">Aste</BaseButton>
  </div>
</template>

<script>
export default {
  computed: {
    items: function() {
      return this.$store.state.items;
    },
    cart: function() {
      return this.$store.state.cart;
    },
    marker: function() {
      return this.$store.state.marker;
    },
    ready: function() {
      return this.shoppingReady &&
             this.locationReady &&
             this.buyReady;
    }
  },
  methods: {
    onName: function(event) {
      console.log('memes');
    },
    onEmail: function(event) {

    },
    onPhone: function(event) {

    },
    buy: function() {
      if (this.ready)
        console.error('The submission is not ready.');
      else
        console.log('we buying');
    }
  }
}
</script>

<template>
  <div>
    <p>Met ou man linformasion pu complet ou asa.</p>

    <div class="form">
      <BaseInput type="text" placeholder="Nom" />
      <BaseInput type="text" placeholder="Dernie Nom" />
      <BaseInput type="text" placeholder="Email" />
      <BaseInput type="text" placeholder="Nimero Telefonn" />
    </div>

    <BaseButton @click.native="buy">Aste</BaseButton>
  </div>
</template>

<style scoped>
.form {
  margin-bottom: 1em;
}
</style>

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
    }
  },
  methods: {
    buy: function() {
      console.log(this.items);
      if (!this.marker) {
        console.error('Did not set marker.');
      } else {
        console.log('we buying');
      }
    }
  }
}
</script>

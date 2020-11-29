<template>
  <div>
    <p>Met ou man linformasion pu complet ou asa.</p>

    <div class="form">
      <div>
        <input type="text" placeholder="Firstname"/>
      </div>
      <div>
        <input type="text" placeholder="Lastname"/>
      </div>
      <div>
        <input type="text" placeholder="Email"/>
      </div>
      <div>
        <input type="text" placeholder="Phone Number"/>
      </div>
    </div>

    <button @click="buy">Aste</button>
  </div>
</template>

<style scoped>
input {
  box-sizing: border-box;
  width: 100%;
  padding: 0.8em 0.5em;
  margin: 0.2em 0em;
  border: 1px solid rgb(100, 100, 100);
  border-radius: 0.5em;
}

.form {
  margin-bottom: 0.5em;
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

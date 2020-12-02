<template>
  <div>
    <p>
      Welcome {{ driver.firstname }} {{ driver.lastname }}!
    </p>

    <section>
      <h1>Location</h1>
      <p>Your current location on the map.</p>

      <DriverMap />
    </section>

    <section>
      <h1>Information</h1>
      <p>
        Email: {{ driver.email }}
      </p>

      <BaseButton @click.native="onLogoutClicked">Logout</BaseButton>
    </section>

    <section>
      <h1>Buying Price</h1>
      <p>Insert the prices at which you bought the items.</p>
      <div v-for="item in items" :key="item._id">
        <BaseInput :placeholder="item.name"></BaseInput>
      </div>
      <BaseButton>Send</BaseButton>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    driver: function() {
      return this.$store.state.driver;
    }
  },
  methods: {
    onLogoutClicked: function() {
      this.$store.commit('logout');
      this.$router.push({ path: '/driver/login' });
    }
  },
  async created() {
    // Try to fetch data from the database instance.
    try {
      this.$store.commit('setItems', await this.$axios.$get('/api/items'));
    } catch (error) {
      // TODO: Set error message or something.
      console.log('Failed to retrieve items');
      console.log(error);
    }

    if (!this.driver)
      this.$router.push({ path:'/driver/login' });
  }
}
</script>

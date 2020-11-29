<template>
  <div>
    <Step count="1" title="Prodwi">
      <ItemStep />
    </Step>

    <Step count="2" title="Kadi">
      <CartStep />
    </Step>

    <Step count="3" title="Lokasion">
      <LocationStep />
    </Step>

    <Step count="4" title="Aste">
      <BuyStep />
    </Step>
  </div>
</template>

<script>
export default {
  async created() {
    try {
      this.$store.commit('setItems', await this.$axios.$get('/api/items'));
    } catch (error) {
      // TODO: Set error message or something.
      console.log('Failed to retrieve items');
      console.log(error);
    }
  }
}
</script>

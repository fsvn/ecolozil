<template>
  <div>
    <StepSection :count=1 title="Shopping" :is-ready="shoppingReady">
      <ShoppingStep />
    </StepSection>

    <StepSection :count=2 title="Lokasion" :is-ready="locationReady">
      <LocationStep />
    </StepSection>

    <StepSection :count=3 title="Aste" :is-ready="buyReady">
      <BuyStep />
    </StepSection>
  </div>
</template>

<script>
export default {
  async created() {
    // Try to fetch data from the database instance.
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

<template>
  <div>
    <StepSection count="1" title="Shopping">
      <ShoppingStep />
    </StepSection>

    <StepSection count="2" title="Lokasion">
      <LocationStep />
    </StepSection>

    <StepSection count="3" title="Aste">
      <BuyStep />
    </StepSection>
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

<template>
  <div>
    <p>Met man prodwi ki pe vande dan ou kadi.</p>

    <div class="item-table" v-if="noItems > 0">
      <ItemStepCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        v-on:add-to-cart="addToCart"
      ></ItemStepCard>
    </div>
    <p v-else>
      Sorry, pena okenn prodwi ki pe vende en se momen.
    </p>
  </div>
</template>

<style scoped>
.item-table {
  display: grid;
  /* TODO: Figure out how to automatically scale this. */
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
</style>

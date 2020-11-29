<template>
  <div>
    <p>Met man prodwiii ki pe vande dan ou kadi.</p>


    <div class="weather-test">
    <p>enfin pfff.</p>

  <div class="container searchContainer">
            <div class="search card card-body">
                <h1>check letemps dehors 1 kou</h1>
                <p class="lead">met ou l'adresss</p>
                <input type="text" id="searchUser" class="form-control" placeholder="Location">
            </div>
            <br>
            <div id="profile"></div>
        </div>
        <div class="container text-center mt-2">
            <button class="btn btn-primary" id="submit">confirmer</button>
        </div>

    </div>

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

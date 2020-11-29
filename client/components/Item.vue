<template>
  <div>
    <h2>{{ item.name }}</h2>
    <img width="200" height="200" src="https://via.placeholder.com/200">
    <p>pou Rs {{ item.price }} la livre</p>
    <button>Met dan cadi</button>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

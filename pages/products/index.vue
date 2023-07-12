<template>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product"/>
      </div>
    </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  })
  //fetch procuts 
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
  //META DATA

  useHead({
    title: 'Nuxt - Products'
  })
</script>

<style scoped>

</style>
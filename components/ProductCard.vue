<template>
  <div class="transition ease-in-out hover:scale-105  card text-center">
    <img :src="product.image" class="thumb">
    <p class="font-bold m-4 truncate">{{product.title}}</p>
    <!-- <p class="text-4xl text-center text-green font-weight-bold">R${{product.price}}</p> -->
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4"> View Details </p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style  scoped>
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>
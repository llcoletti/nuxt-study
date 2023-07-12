<template>
  <div class= "content-center">
    <ProductDetails :product="product"/>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const uri = 'https://fakestoreapi.com/products/' + id;

  //fetch procuts 
  const { data: product } = await useFetch(uri, {key:id})

  if (!product.value) {
    throw createError({statusCode: 404, statusMessage: 'Product not Found', fatal: true})
  }
</script>

<style scoped>

</style>
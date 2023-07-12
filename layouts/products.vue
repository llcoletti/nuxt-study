<template>
  <div>
    <header class="">
      <nav class="container mx-auto p-4 flex justify-between">
        
        <NuxtLink to="/" class="font-bold">COMPANY</NuxtLink>
        
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <!-- output page content -->

    <div class="container mx-auto p-4">  
      <p>Example Custom Layout for Products</p>
      <slot />
    </div>
  </div>
</template>

<style scoped>
  
</style>
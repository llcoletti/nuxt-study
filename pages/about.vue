<template>
  <div>
   <h2>About</h2>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deleniti ullam maxime enim quidem consectetur expedita inventore totam sit. Nemo ut iste culpa nobis pariatur quo impedit tempore, perspiciatis laborum.
   Et quae accusamus nobis nostrum ipsum, omnis odio libero perspiciatis eius hic adipisci repellendus excepturi ipsa velit, quibusdam dolorum animi, aliquam cum earum harum. Soluta, ex? Quisquam cum officiis consectetur.</p>

   <h2><br>currencyapi data BRL/USD</h2>
   <p>{{data}}</p>

  </div>
</template>

<script setup>
  /*get
  const data = await useFetch('./api/msbnet?name=lucas&empresa=msbnet')*/
  
  //post
  // const {data} = await useFetch('/api/msbnet?name=lucas&empresa=msbnet', {
  //   method: 'post',
  //   body: { age: 30}
  // })

  const {data} = await useFetch('/api/currency/BRL')

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p{
    margin: 20 px;
  }</style>
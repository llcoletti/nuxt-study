export default defineEventHandler(async(event) => {

  console.log("MOEDINHA")

  const {currency} = event.context.params
  const { currencyKey } = useRuntimeConfig()

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${currency}&apikey=${currencyKey}`

  const { data } = await $fetch(uri)

  return data

})
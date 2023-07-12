export default defineEventHandler(async (event) => {

  //handle Query params
  //const { name, empresa } = getQuery(event)

  //handle post data
  //const {age} = await readBody(event)
  // return {
  //   message: `Nome: ${name} Idade: ${age} Empresa ${empresa} `
  // }

  //api call com private key ($fetch para server Route)
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=NBFlbJEgMIdC8bjCHEINuhREdQWBD3sivUV4amt5')

  console.log(data)
  return data
})
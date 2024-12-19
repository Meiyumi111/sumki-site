import axios from 'axios'

export const getCart = async () => {
  const res = await axios.get('https://37b4296b890add95.mokky.dev/cart')
  return res
}

export const getFavorites = async () => {
  const res = await axios.get('https://37b4296b890add95.mokky.dev/favorite')
  return res
}

export const getProducts = async () => {
  const res = await axios.get('https://37b4296b890add95.mokky.dev/sneakers')
  return res
}

export const addToCart = async (obj) => {
  const res = await axios.post('https://37b4296b890add95.mokky.dev/cart', obj)
  return res
}

export const deleteFromCart = async (obj) => {
  const res = await axios.delete(
    `https://37b4296b890add95.mokky.dev/cart/${obj.id}`,
  )
  return res
}

export const addToFavorites = async (obj) => {
  const res = await axios.post('https://37b4296b890add95.mokky.dev/favorite', obj)
  return res
}

export const deleteFromFavorites = async (obj) => {
  const res = await axios.delete(
    `https://37b4296b890add95.mokky.dev/favorite/${obj.id}`,
  )
  return res
}
